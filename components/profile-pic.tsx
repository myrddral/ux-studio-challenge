import Image from 'next/image'

interface ProfilePicProps {
  width: number
  height: number
  url: string | null
}
export function ProfilePic({ width, height, url }: ProfilePicProps) {
  return (
    <Image
      src={url || '/profile_176w_round.png'}
      alt='profile'
      width={width}
      height={height}
      className='rounded-full'
      unoptimized
    />
  )
}
