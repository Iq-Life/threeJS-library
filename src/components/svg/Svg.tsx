import { SvgType } from "@types/types";

export type SvgProps = {
  disabled?: boolean;
  className?: string;
  error?: boolean;
  type: SvgType;
  width?: number;
  height?: number;
  viewBox?: string;
};

export function Svg({
  className,
  type,
  error,
  disabled,
  width = 24,
  height = 24,
  viewBox,
}: SvgProps) {
  return (
    <>
      {type === "CloseArrow" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7071 8.29286C17.3166 7.90234 16.6834 7.90234 16.2929 8.29286L12 12.5858L7.70711 8.29286C7.31658 7.90234 6.68342 7.90234 6.29289 8.29286C5.90237 8.68339 5.90237 9.31655 6.29289 9.70708L12 15.4142L17.7071 9.70708C18.0976 9.31655 18.0976 8.68339 17.7071 8.29286Z"
            fill={getColorForSvg()}
          />
        </svg>
      )}
      {type === "PaginationArrow" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox={viewBox ?? "0 0 24 24"}
          fill="#696C80"
          className={className}
        >
          <g id="keyboard_arrow_right" clipPath="url(#clip0_3803_4452)">
            <path
              id="Vector"
              d="M8.59009 16.59L13.1701 12L8.59009 7.41L10.0001 6L16.0001 12L10.0001 18L8.59009 16.59Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_3803_4452">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "EnterLogo" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 25 24"
          fill="none"
          className={className}
        >
          <g clipPath="url(#clip0_3863_387)">
            <path
              d="M9.8 6.7C9.41 7.09 9.41 7.71 9.8 8.1L12.7 11H4.5C3.95 11 3.5 11.45 3.5 12C3.5 12.55 3.95 13 4.5 13H12.7L9.8 15.9C9.41 16.29 9.41 16.91 9.8 17.3C10.19 17.69 10.81 17.69 11.2 17.3L15.79 12.71C16.18 12.32 16.18 11.69 15.79 11.3L11.2 6.7C10.81 6.31 10.19 6.31 9.8 6.7ZM19.5 20H12.5C11.95 20 11.5 20.45 11.5 21C11.5 21.55 11.95 22 12.5 22H19.5C20.6 22 21.5 21.1 21.5 20V4C21.5 2.9 20.6 2 19.5 2H12.5C11.95 2 11.5 2.45 11.5 3C11.5 3.55 11.95 4 12.5 4H19.5V20Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3863_387">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "Users" && (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <g id="&#226;&#135;&#132; Left Icon" clipPath="url(#clip0_3926_123)">
            <path
              id="Vector"
              d="M9.05263 11.5C11.2874 11.5 13.1053 9.59357 13.1053 7.25C13.1053 4.90643 11.2874 3 9.05263 3C6.8179 3 5 4.90643 5 7.25C5 9.59357 6.8179 11.5 9.05263 11.5ZM9.05263 5.42857C10.0137 5.42857 10.7895 6.24214 10.7895 7.25C10.7895 8.25786 10.0137 9.07143 9.05263 9.07143C8.09158 9.07143 7.31579 8.25786 7.31579 7.25C7.31579 6.24214 8.09158 5.42857 9.05263 5.42857ZM9.05263 13.625C6.34316 13.625 2 15.0457 2 17.875V18.7857C2 19.4536 2.52105 20 3.15789 20H14.9474C15.5842 20 16.1053 19.4536 16.1053 18.7857V17.875C16.1053 15.0457 11.7621 13.625 9.05263 13.625ZM4.70947 17.5714C5.68211 16.8671 6.98 16.0536 9.05263 16.0536C11.1253 16.0536 12.4232 16.8671 13.3958 17.5714H4.70947ZM16.1516 13.6979C17.4947 14.7179 18.4211 16.0779 18.4211 17.875V20H20.8421C21.4789 20 22 19.4536 22 18.7857V17.875C22 15.4221 19 14.0257 16.1516 13.6979ZM14.9474 11.5C17.1821 11.5 19 9.59357 19 7.25C19 4.90643 17.1821 3 14.9474 3C14.3221 3 13.7432 3.15786 13.2105 3.425C13.94 4.50571 14.3684 5.82929 14.3684 7.25C14.3684 8.67071 13.94 9.99429 13.2105 11.075C13.7432 11.3421 14.3221 11.5 14.9474 11.5Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_3926_123">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "Pictures" && (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <g id="&#226;&#135;&#132; Left Icon" clipPath="url(#clip0_3926_115)">
            <path
              id="Vector"
              d="M4 4H11V2H4C2.9 2 2 2.9 2 4V11H4V4ZM10 13L6 18H18L15 14L12.97 16.71L10 13ZM17 8.5C17 7.67 16.33 7 15.5 7C14.67 7 14 7.67 14 8.5C14 9.33 14.67 10 15.5 10C16.33 10 17 9.33 17 8.5ZM20 2H13V4H20V11H22V4C22 2.9 21.1 2 20 2ZM20 20H13V22H20C21.1 22 22 21.1 22 20V13H20V20ZM4 13H2V20C2 21.1 2.9 22 4 22H11V20H4V13Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_3926_115">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "Enters" && (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <g id="&#226;&#135;&#132; Left Icon" clipPath="url(#clip0_3926_131)">
            <g id="Group">
              <path
                id="Vector"
                d="M9.3 6.7C8.91 7.09 8.91 7.71 9.3 8.1L12.2 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13H12.2L9.3 15.9C8.91 16.29 8.91 16.91 9.3 17.3C9.69 17.69 10.31 17.69 10.7 17.3L15.29 12.71C15.68 12.32 15.68 11.69 15.29 11.3L10.7 6.7C10.31 6.31 9.69 6.31 9.3 6.7ZM19 20H12C11.45 20 11 20.45 11 21C11 21.55 11.45 22 12 22H19C20.1 22 21 21.1 21 20V4C21 2.9 20.1 2 19 2H12C11.45 2 11 2.45 11 3C11 3.55 11.45 4 12 4H19V20Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_3926_131">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "ChangeMarking" && (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <g id="&#226;&#135;&#132; Left Icon" clipPath="url(#clip0_3926_142)">
            <path
              id="Vector"
              d="M18.25 7.6L12.75 4.42C12.29 4.15 11.71 4.15 11.25 4.42L5.75 7.6C5.29 7.87 5 8.36 5 8.9V15.25C5 15.79 5.29 16.28 5.75 16.55L11.25 19.73C11.71 20 12.29 20 12.75 19.73L18.25 16.55C18.71 16.28 19 15.79 19 15.25V8.9C19 8.36 18.71 7.87 18.25 7.6ZM7 14.96V10.34L11 12.66V17.27L7 14.96ZM12 10.93L8 8.61L12 6.3L16 8.61L12 10.93ZM13 17.27V12.66L17 10.34V14.96L13 17.27ZM7 2H3.5C2.67 2 2 2.67 2 3.5V7H4V4H7V2ZM17 2H20.5C21.33 2 22 2.67 22 3.5V7H20V4H17V2ZM7 22H3.5C2.67 22 2 21.33 2 20.5V17H4V20H7V22ZM17 22H20.5C21.33 22 22 21.33 22 20.5V17H20V20H17V22Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_3926_142">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "User" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          className={className}
        >
          <g clipPath="url(#clip0_4013_6520)">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
          </g>
          <defs>
            <clipPath id="clip0_4013_6520">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "More" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
        >
          <g id="more_vert" clipPath="url(#clip0_4025_3103)">
            <path
              id="Vector"
              d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
              fill="#696C80"
            />
          </g>
          <defs>
            <clipPath id="clip0_4025_3103">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "Search" && (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="&#226;&#135;&#132; Right Icon"
            clipPath="url(#clip0_4025_2522)"
          >
            <path
              id="Vector"
              d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
              fill="#696C80"
            />
          </g>
          <defs>
            <clipPath id="clip0_4025_2522">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "Arrow" && (
        <svg
          className={className}
          width={width}
          height={height}
          viewBox={viewBox ?? "2 2 20 20"}
          fill="#323232"
        >
          <g id="&#226;&#135;&#132; Icon">
            <path
              id="Vector"
              d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
            />
          </g>
        </svg>
      )}
      {type === "Close" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_3443_8008)">
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#696C80"
            />
          </g>
          <defs>
            <clipPath id="clip0_3443_8008">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "Eye" && (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4508_522)">
            <path
              d="M8.00008 3C4.66675 3 1.82008 5.07333 0.666748 8C1.82008 10.9267 4.66675 13 8.00008 13C11.3334 13 14.1801 10.9267 15.3334 8C14.1801 5.07333 11.3334 3 8.00008 3ZM8.00008 11.3333C6.16008 11.3333 4.66675 9.84 4.66675 8C4.66675 6.16 6.16008 4.66667 8.00008 4.66667C9.84008 4.66667 11.3334 6.16 11.3334 8C11.3334 9.84 9.84008 11.3333 8.00008 11.3333ZM8.00008 6C6.89341 6 6.00008 6.89333 6.00008 8C6.00008 9.10667 6.89341 10 8.00008 10C9.10675 10 10.0001 9.10667 10.0001 8C10.0001 6.89333 9.10675 6 8.00008 6Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_4508_522">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "ChangeLog" && (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4508_528)">
            <path
              d="M21 4H3C1.9 4 1 4.9 1 6V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V6C23 4.9 22.1 4 21 4ZM3 19V6H11V19H3ZM21 19H13V6H21V19ZM14 9.5H20V11H14V9.5ZM14 12H20V13.5H14V12ZM14 14.5H20V16H14V14.5Z"
              fill="#babdcc"
            />
          </g>
          <defs>
            <clipPath id="clip0_4508_528">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "Pencil" && (
        <svg
          width={width}
          height={height}
          fill="#323232"
          viewBox={viewBox}
          className={className}
        >
          <g>
            <path d="M3 17.2501V21.0001H6.75L17.81 9.94006L14.06 6.19006L3 17.2501ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z" />
          </g>
        </svg>
      )}
      {type === "Cube" && (
        <svg
          className={className}
          width={width ?? "24"}
          height={height ?? "24"}
          fill="#BABDCC"
          viewBox={viewBox ?? "0 0 20 20"}
        >
          <path d="M16.25 5.6L10.75 2.42C10.29 2.15 9.71 2.15 9.25 2.42L3.75 5.6C3.29 5.87 3 6.36 3 6.9V13.25C3 13.79 3.29 14.28 3.75 14.55L9.25 17.73C9.71 18 10.29 18 10.75 17.73L16.25 14.55C16.71 14.28 17 13.79 17 13.25V6.9C17 6.36 16.71 5.87 16.25 5.6ZM5 12.96V8.34L9 10.66V15.27L5 12.96ZM10 8.93L6 6.61L10 4.3L14 6.61L10 8.93ZM11 15.27V10.66L15 8.34V12.96L11 15.27ZM5 0H1.5C0.67 0 0 0.67 0 1.5V5H2V2H5V0ZM15 0H18.5C19.33 0 20 0.67 20 1.5V5H18V2H15V0ZM5 20H1.5C0.67 20 0 19.33 0 18.5V15H2V18H5V20ZM15 20H18.5C19.33 20 20 19.33 20 18.5V15H18V18H15V20Z" />
        </svg>
      )}
      {type === "Warning" && (
        <svg
          className={className}
          width={width ?? "22"}
          height={height ?? "19"}
          fill="#323232"
          viewBox={viewBox ?? "0 0 24 24"}
        >
          <path d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z" />
        </svg>
      )}
      {type === "Checkmark" && (
        <svg
          className={className}
          width={width ?? "18"}
          height={height ?? "14"}
          fill="#0E8C43"
          viewBox={viewBox ?? "0 0 18 14"}
        >
          <path d="M5.9999 11.2L1.7999 6.99998L0.399902 8.39998L5.9999 14L17.9999 1.99998L16.5999 0.599976L5.9999 11.2Z" />
        </svg>
      )}
      {type === "FullScreenClosed" && (
        <svg
          className={className}
          width={width ?? "24"}
          height={height ?? "24"}
          fill="#323232"
          viewBox={viewBox ?? "0 -1 24 24"}
        >
          <path d="M7 14H5V19H10V17H7V14ZM5 10H7V7H10V5H5V10ZM17 17H14V19H19V14H17V17ZM14 5V7H17V10H19V5H14Z" />
        </svg>
      )}
      {type === "FullScreenOpened" && (
        <svg
          className={className}
          width={width ?? "24"}
          height={height ?? "24"}
          fill="#323232"
          viewBox={viewBox ?? "0 -1 24 24"}
        >
          <path d="M5 16H8V19H10V14H5V16ZM8 8H5V10H10V5H8V8ZM14 19H16V16H19V14H14V19ZM16 8V5H14V10H19V8H16Z" />
        </svg>
      )}
    </>
  );
}
