import React from "react";
import Link from "next/link";
import SkillGraph from "./SkillGraph";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";


interface Skill {
  name: string;
  percentage: number;
  colorClass: string;
}

interface CandidateProps {
  name: string;
  university: string;
  year: string;
  matchPercentage: number;
  imageUrl: string;
  highlights: string[];
  skills: Skill[];
  isOnline?: boolean;
  opacity?: string;
}

export default function CandidateCard({
  name,
  university,
  year,
  matchPercentage,
  imageUrl,
  highlights,
  skills,
  isOnline,
  opacity,
}: CandidateProps) {
  return (
    <Link href="/talent/1" className="block">
      <Card className={`${opacity ? opacity : ""}`}>
        {/* Card Header */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex gap-3">
            <div className="relative">
              <div
                className="size-14 rounded-full bg-gray-200 bg-cover bg-center"
                style={{ backgroundImage: `url("${imageUrl}")` }}
              ></div>
              {isOnline && (
                <div className="absolute bottom-0 right-0 size-4 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full"></div>
              )}
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-[#111318] dark:text-white leading-tight truncate">
                {name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium truncate">
                {year}
              </p>
              <p className="text-xs text-primary font-bold mt-0.5 truncate">
                {university}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <Badge variant="primary">
              <span className="material-symbols-outlined text-[16px] fill-current">
                bolt
              </span>
              <span className="text-xs font-bold">{matchPercentage}% Match</span>
            </Badge>
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {highlights.map((highlight, index) => (
            <Badge key={index} variant="secondary">
              {highlight}
            </Badge>
          ))}
        </div>

        {/* Skill Proficiency Graph */}
        <div className="mb-4 space-y-2">
          {skills.map((skill, index) => (
            <SkillGraph
              key={index}
              label={skill.name}
              percentage={skill.percentage}
              colorClass={skill.colorClass}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 mt-1">
          <Button variant="secondary" startIcon="bookmark">
            Save
          </Button>
          <Button variant="primary" startIcon="chat">
            Message
          </Button>
        </div>
      </Card>
    </Link>
  );
}
