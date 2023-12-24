type Props = {
  className?: string,
  type?: "small" | "large"
}

export default function Logo({ className, type = "large" }: Props) {
  if (type == "small") {
    return <div className={"inline-block uppercase border-2 border-black bg-white py-1 px-6 " + (className ?? '')}>MeetAct</div>
  } else {
    return <div className={"inline-block text-4xl uppercase border-2 border-black bg-white py-3 px-10 " + (className ?? '')}>MeetAct</div>
  }
}