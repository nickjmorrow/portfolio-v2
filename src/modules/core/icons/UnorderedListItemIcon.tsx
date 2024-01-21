import { DefaultIconSvg } from 'src/modules/core/icons/DefaultIconSvg';
import { SvgProps } from 'src/modules/core/icons/SvgProps';

export const UnorderedListItemIcon = ({ ...svgProps }: SvgProps) => (
    <DefaultIconSvg
        width="1200pt"
        height="1200pt"
        viewBox="0 0 1200 1200"
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
    >
        <path
            fill="currentColor"
            d="m1032 454.44-694.8-401.04c-147.12-84.84-313.2 77.16-231.48 226.2l131.04 240h0.003907c13.461 24.742 20.516 52.469 20.516 80.637 0 28.172-7.0547 55.895-20.516 80.641l-131.04 239.52c-81.719 149.04 84.359 311.04 231.48 226.2l694.8-401.04c34.25-19.734 60.441-50.914 73.969-88.059 13.531-37.141 13.531-77.859 0-115-13.527-37.145-39.719-68.324-73.969-88.059z"
        />
    </DefaultIconSvg>
);
