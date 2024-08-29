import Image from 'next/image'

export function ProfilePic() {
  return (
    <Image src={'/profile_512w_round.png'} alt="profile" width={40} height={40} className="rounded-full" />
  )
}
