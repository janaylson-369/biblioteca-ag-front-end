// Ícones SVG inline (estilo "outline"), sem depender de nenhuma biblioteca externa.
function Icon({ size = 16, strokeWidth = 2, children, ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            {children}
        </svg>
    )
}

export const ArrowRight = (p) => (
    <Icon {...p}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </Icon>
)

export const Search = (p) => (
    <Icon {...p}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </Icon>
)

export const BookOpen = (p) => (
    <Icon {...p}>
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </Icon>
)

export const User = (p) => (
    <Icon {...p}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </Icon>
)

export const Share = (p) => (
    <Icon {...p}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 13.5 6.8 4" />
        <path d="m15.4 6.5-6.8 4" />
    </Icon>
)

export const Camera = (p) => (
    <Icon {...p}>
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z" />
        <circle cx="12" cy="13" r="3" />
    </Icon>
)

export const PlayCircle = (p) => (
    <Icon {...p}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
    </Icon>
)

export const Accessibility = (p) => (
    <Icon {...p}>
        <circle cx="16" cy="4" r="1" />
        <path d="m18 19 1-7-6 1" />
        <path d="m5 8 3-3 5.5 3-2.36 3.5" />
        <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
        <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </Icon>
)
