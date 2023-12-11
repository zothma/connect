"use client"

import { ProjectWithCompleteData } from "@/types/models";
import ProjectTypeBadge from "./ProjectTypeBadge"
import ProjectBookmark from "./ProjectBookmark";
import UserImage from "../user/UserImage";
import Link from "next/link";
import styles from "./project-card.module.css"
import { useState } from "react";
import { raleway } from "@/lib/fonts";

type Props = {
  project: ProjectWithCompleteData,
  bookmarked: boolean,
  onBookmark: (value: boolean) => void
}

export default function ProjectCard({ project, bookmarked, onBookmark }: Props) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={"h-80 min-w-[320px] transition-transform rounded-[30px] drop-shadow-box " + (active && 'scale-95')}
      style={{ backgroundColor: project.color }}>

      {/* Flex block */}
      <div className="h-full w-full flex flex-col gap-4 p-5">
        <div className="relative z-10 w-full flex justify-between">
          <ProjectTypeBadge type={project.type} />
          <ProjectBookmark bookmarked={bookmarked} onBookmark={onBookmark} />
        </div>

        <div className="flex flex-col gap-4 grow">
          <p className="text-2xl font-semibold mt-2">
            <Link
              href="#card"
              className={styles.enlarged_link + " " + raleway.className}
              onMouseDown={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
              onMouseUp={() => setActive(false)}
            >
              {project.name}
            </Link>
          </p>
          <p className="text-lg">{project.domain.name}</p>
          <p className="truncate-2">{project.description}</p>
        </div>

        <Link href="#user" className="relative z-10 active:scale-95 transition-transform self-start bg-white rounded-[30px]">
          <span className="flex h-full gap-3 pt-2 pb-2 pl-2 pr-5">
            <UserImage user={project.owner} height={40} width={40} />
            <span className="flex flex-col h-full">
              <span className="text font-bold">{project.owner.first_name} {project.owner.last_name?.toLocaleUpperCase()}</span>
              <span className="text-sm -mt-1">Travaille à ...</span>
            </span>
          </span>
        </Link>
      </div>

    </div>
  )
}