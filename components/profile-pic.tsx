import Image from 'next/image'

export function ProfilePic({ width, height }: { width: number; height: number }) {
  return (
    <Image
      src={'/profile_512w_round.png'}
      alt="profile"
      width={width}
      height={height}
      className="rounded-full"
    />
  )
}
