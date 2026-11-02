import classNames from "classnames"

export function Avatar(props) {
  const {
    alt = "",
    className,
    imageUrl,
  } = props

  const avatarClasses = classNames(className, "avatar")

  return (
    <img className={avatarClasses} src={imageUrl} alt={alt}/>
  );
}
