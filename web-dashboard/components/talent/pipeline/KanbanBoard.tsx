import React from "react";
import KanbanColumn from "./KanbanColumn";
import KanbanCard from "./KanbanCard";

export default function KanbanBoard() {
  return (
    <main className="flex overflow-x-auto no-scrollbar h-[calc(100vh-125px)] snap-x snap-mandatory">
      {/* Sourced Column */}
      <KanbanColumn title="Sourced" count={12}>
        <KanbanCard
          name="Alex Rivera"
          university="Stanford University"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuALE-vht7wbohJg81iD74EO4CNk9U9bNHan6NPeLxOZXfGJX3w4lD2w2cPEmRsqEggTnxVBF5dTfIzoRh_pkkQO7tSExGJLmJOXiaEwvP6skI_k9H4SsuSufvBy7ruMH0MwpDPt90EBnYohbEfMZgFGzkgMtVzTuu2Tz52ceOOlbvNsE-7rsmWVnIHHQInHvijyxyPWNljg8l-9wI2SvyJ8b2_ceaf6n3iVLT-IJ0qe8hv2uZMGAT6KRlLzTT7Ici1a846hwgYDi1o"
          matchScore={98}
          matchColorClass="bg-emerald-50"
          matchTextColorClass="text-emerald-600"
          aiRecLevels={[1, 3, 1, 2, 3]} // mapped roughly from design bars
        />
      </KanbanColumn>

      {/* Screening Column */}
      <KanbanColumn title="Screening" count={8}>
        <KanbanCard
          name="Jordan Smith"
          university="MIT"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBBysuGLI7aJUrvqHso2Vtj6gStgjSzHFngEV37LcVi-BuzpH-SCJyNMHHELWrq8yd-DDiWLIEt2i2Fx6H8K2eDvbt4Xrakkjc5l8w4rNvdXEucYhwXiuo3jbn6LEKC5lCe48fntMv29TIHryByjIQ9wpwUgwGATS6Tye_GMHMiE-HEKEs6fUaLUqtevu6rQPTALrJiTlxVh0Laht9nnBRTPKN2_j09kX9B08Bx37N3CFtcILfQ7SreMgzkn8Y6wP8GdIvtyi3I_QI"
          matchScore={92}
          matchColorClass="bg-blue-50"
          matchTextColorClass="text-blue-600"
          aiRecLevels={[1, 1, 3, 2, 3]}
        />
      </KanbanColumn>

      {/* Interviewing Column */}
      <KanbanColumn
        title="Interviewing"
        count={5}
        bgClass="bg-blue-50/50 dark:bg-blue-900/10"
        titleColorClass="text-primary"
        countColorClass="bg-primary text-white"
      >
        <KanbanCard
          name="Marcus Chen"
          university="UC Berkeley"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDddp2yHIha7hTmEEWBdgoK6LzyWP8AZGA0JAYQReklOyNW7cjrba7pRC9VFMvnzn1wJ9RdrE3c9gXbuAKlsN7ncia3SU7Rtg_8lgj-1xzP8AEB7rybp06j8O_Scn9VR982Rck5vUFa_Y1zTldFuJUlNr-UhcEzXQ6sTKycRb7MvDigqGP8IF96KSkbLp9YMypvdoYD79bQQVh4FLvZTfWs0y3_w6YZS8rYiapONXrMa5bhQCG_TlZeRrdVoLguwbGGA8YjzL-iVSc"
          matchScore={95}
          matchColorClass="bg-emerald-50"
          matchTextColorClass="text-emerald-600"
          aiRecLevels={[3, 2, 3, 3, 1]}
          isNextUp={true}
          initials={{ text: "JD", bgClass: "bg-gray-200", textClass: "" }}
          secondInitials={{
            text: "SK",
            bgClass: "bg-blue-100",
            textClass: "text-primary",
          }}
        />
        <KanbanCard
          name="Maya Patel"
          university="Georgia Tech"
          imageUrl="" // Placeholder handled by check or empty URL logic if needed, but design has icon placeholder logic. I'll rely on the img tag for now, or need to adapt KanbanCard to support non-image avatars.
          // Wait, the design used an explicit icon for Maya. I should update KanbanCard to support avatar fallback or pass a prop.
          // For now I'll use a placeholder image or leave it blank to see behavior.
          // Actually, let's just pass a generic avatar image for simplicity or add conditional rendering.
          // I will use a placeholder image URL for now.
          matchScore={88}
          matchColorClass="bg-yellow-50"
          matchTextColorClass="text-yellow-600"
          aiRecLevels={[1, 1, 1, 3, 2]}
        />
      </KanbanColumn>

      {/* Technical Test Column */}
      <KanbanColumn title="Technical Test" count={3}>
        <div className="opacity-60">
          <KanbanCard
            name="Liam Wilson"
            university="CMU"
            imageUrl=""
            matchScore={82}
            matchColorClass="bg-gray-50"
            matchTextColorClass="text-gray-600"
            aiRecLevels={[]} // Hidden in design opacity card
          />
        </div>
      </KanbanColumn>

      {/* Offer Column */}
      <KanbanColumn title="Offer" count={2}>
        <KanbanCard
          name="Elena Rodriguez"
          university="Harvard University"
          imageUrl=""
          matchScore={96}
          matchColorClass="bg-emerald-50"
          matchTextColorClass="text-emerald-600"
          aiRecLevels={[]}
        />
      </KanbanColumn>
    </main>
  );
}
