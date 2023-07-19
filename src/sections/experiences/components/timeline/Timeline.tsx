import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Experience, experiences } from '../../../../data'

interface Props {
    experiences: Experience[]
    selectedExperience: Experience
    onSelectExperience: (experience: Experience) => void
}

const sortByStartDateDescending = (
    firstExperience: Experience,
    secondExperience: Experience
) => {
    if (firstExperience.startDate === null) {
        return 1
    }
    if (secondExperience.startDate === null) {
        return -1
    }
    return firstExperience.startDate - secondExperience.startDate < 0 ? 1 : -1
}

export const Timeline = ({
    experiences,
    selectedExperience,
    onSelectExperience,
}: Props) => {
    const experiencedSortedByStartDateAscending = experiences.sort(
        sortByStartDateDescending
    )

    const selectedExperienceRef = useRef<HTMLDivElement>()
    const yearlyTimelineRef = useRef<HTMLDivElement>()

    const [yPosition, setYPosition] = useState(0)
    useEffect(() => {
        const yearlyTimelineYPosition =
            yearlyTimelineRef.current?.getBoundingClientRect().y ?? 0
        const selectedExperienceYPosition =
            selectedExperienceRef.current?.getBoundingClientRect().y ?? 0
        const newYPosition =
            selectedExperienceYPosition - yearlyTimelineYPosition
        setYPosition(newYPosition)
    }, [selectedExperience])

    return (
        <TimelineContainer>
            <YearlyTimeline ref={yearlyTimelineRef}>
                <YearlyTimelinePlaceIndicator yPosition={yPosition} />
            </YearlyTimeline>
            <TimelineItemList>
                {experiencedSortedByStartDateAscending.map((experience) => {
                    const isSelected =
                        selectedExperience.experienceId ===
                        experience.experienceId
                    const onClick: React.MouseEventHandler<
                        HTMLDivElement
                    > = () => onSelectExperience(experience)
                    return (
                        <TimelineItem
                            ref={isSelected ? selectedExperienceRef : undefined}
                            onClick={onClick}
                        >
                            <TimelineItemLabel>
                                {experience.name}
                            </TimelineItemLabel>
                        </TimelineItem>
                    )
                })}
            </TimelineItemList>
        </TimelineContainer>
    )
}

const YearlyTimeline = styled.div`
    width: 30px;
    border-radius: 8px;
`

const YearlyTimelinePlaceIndicator = styled.div<{ yPosition: number }>`
    width: 100%;
    height: 40px;
    background-color: ${(p) => p.theme.colors.accent};
    transform: translateY(${(p) => p.yPosition}px);
    transition: transform cubic-bezier(0.5, 1.1, 0.4, 0.9) 200ms;
    border-radius: 8px;
`

const TimelineContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 16px;
    height: 300px;
`

const TimelineItemList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TimelineItem = styled.div`
    color: ${(p) => p.theme.colors.text};
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    line-height: 12px;
    padding: 0px 8px;
    &:hover {
        background-color: lightgray;
        border-radius: 8px;
        transition: background-color ease-in-out 100ms;
    }
`

const TimelineItemLabel = styled.span``
