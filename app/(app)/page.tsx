import ProjectContainer from "@/components/project/ProjectContainer";
import { URL } from "url";

export default async function Home() {
  const url = new URL("/api/project", process.env.BASE_URL)
  return (
    <ProjectContainer fetchUrl={url.toString()} />
  )
}