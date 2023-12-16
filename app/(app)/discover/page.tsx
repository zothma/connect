import AdvertContainer from "@/components/advert/AdvertContainer";

export default function DiscoverPage() {
  const url = new URL("/api/advert", process.env.BASE_URL)

  return (
    <>
      <AdvertContainer fetchUrl={url.toString()} />
    </>
  )
}