"use client"

import { ProjectWithCompleteData } from "@/types/models";
import ProjectTypeBadge from "./ProjectTypeBadge"
import ProjectBookmark from "./ProjetBookmark";
import UserImage from "../user/UserImage";
import Link from "next/link";
import styles from "./project-card.module.css"
import { useState } from "react";

type Props = {
  project: ProjectWithCompleteData,
  bookmarked: boolean,
  onBookmark: (value: boolean) => void
}

export default function ProjectCard({ project, bookmarked, onBookmark }: Props) {
  const [active, setActive] = useState(false);

  return (
    <div className={"flex flex-col h-[310px] border-[#C9C9C9] border-2 rounded-[30px] p-1 transition-transform " + (active && 'scale-95')}>
      <div className="relative flex flex-col justify-between grow shrink rounded-[26px] p-4" style={{ backgroundColor: project.color }}>
        <div className="flex justify-between">
          <div className="relative z-10">
            <ProjectTypeBadge type={project.type} />
          </div>
          <div className="relative z-10">
            <ProjectBookmark bookmarked={bookmarked} onBookmark={onBookmark} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl">
            <Link
              href="#card"
              className={styles.enlarged_link}
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
      </div>
      <div className="relative flex mx-4 my-3 gap-4">
        <UserImage user={project.owner} height={40} width={40} />
        <div>
          <p className="font-bold">
            <Link href="#user" className={styles.enlarged_link}>
              {project.owner.first_name} {project.owner.last_name}
            </Link>
          </p>
          <p className="text-sm text-neutral-500 -mt-[2px]">Travaille à </p>
        </div>
      </div>
    </div>
  )
}