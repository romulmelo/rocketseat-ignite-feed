interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  hasBorder?: boolean
}

function Avatar({ src, alt, hasBorder = true }: AvatarProps) {
  return (
    <img
      className={`h-10 w-10 rounded-md lg:h-14 lg:w-14 ${
        hasBorder
          ? "outline outline-2 outline-offset-4 outline-green-light"
          : ""
      }`}
      src={src}
      alt={alt}
      width={56}
      height={56}
      loading="lazy"
    />
  )
}

export default Avatar
