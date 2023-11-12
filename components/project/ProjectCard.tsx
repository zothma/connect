import ProjectTypeBadge from "./ProjectTypeBadge"
import { Prisma } from "@prisma/client";
import ProjectBookmark from "./ProjetBookmark";
import UserImage from "../user/UserImage";

const projectWithCompleteData = Prisma.validator<Prisma.ProjectDefaultArgs>()({
  include: {
    domain: true,
    type: true,
    owner: true,
  },
})

type ProjectWithCompleteData = Prisma.ProjectGetPayload<typeof projectWithCompleteData>
type Props = {
  project: ProjectWithCompleteData,
  bookmarked: boolean,
  onBookmark: (value: boolean) => void
}

export default function ProjectCard({ project, bookmarked, onBookmark }: Props) {
  return (
    <div className="flex flex-col h-[310px] border-[#C9C9C9] border-2 rounded-[30px] p-1">
      <div className="flex flex-col justify-between grow shrink rounded-[26px] p-4" style={{ backgroundColor: project.color }}>
        <div className="flex justify-between">
          <ProjectTypeBadge type={project.type} />
          <ProjectBookmark bookmarked={bookmarked} onBookmark={onBookmark} />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl">{project.name}</p>
          <p className="text-lg">{project.domain.name}</p>
          <p className="truncate-2">{project.description}</p>
        </div>
      </div>
      <div className="flex mx-4 my-3 gap-4">
        <UserImage user={project.owner} height={40} width={40} />
        <div>
          <p className="font-bold">{project.owner.first_name} {project.owner.last_name}</p>
          <p className="text-sm text-neutral-500 -mt-[2px]">Travaille à </p>
        </div>
      </div>
    </div>
  )
}