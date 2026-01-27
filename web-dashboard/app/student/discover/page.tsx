import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FilterChip from "@/components/ui/FilterChip";

export default function DiscoverPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-white min-h-screen font-display">
      <div className="max-w-[960px] mx-auto w-full px-4 py-8">
        {/* Hero Search Section */}
        <section className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-[#111318] dark:text-white">
            Search for your future university
          </h1>
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative flex items-center group">
              <div className="absolute left-4 text-gray-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="w-full h-14 pl-12 pr-4 bg-white dark:bg-gray-800 border-none rounded-xl shadow-lg shadow-primary/5 focus:ring-2 focus:ring-primary text-lg transition-all outline-none placeholder:text-gray-400 dark:text-white"
                placeholder="Search by name, city, or major"
                type="text"
              />
            </div>
          </div>
          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3">
            <FilterChip label="Engineering" active />
            <FilterChip label="Medical" />
            <FilterChip label="Business" />
            <FilterChip label="Arts & Design" />
          </div>
        </section>

        {/* Results Section */}
        <section>
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="text-2xl font-bold text-[#111318] dark:text-white">Top Matches for You</h2>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark hover:underline">
              View all
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* University Card 1 */}
            <Link href="/student/discover/habib">
            <Card hoverEffect noPadding className="group">
              <div className="relative h-64 w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAntFRFFp_HVouwGvAFwptK-DdpLT0INdgAzLEzd2A7TA5C4LdpgUW9ClzFOqOImLy3hnW5LtbfDemI8JJm0pIZCpzvnHCukWQ0HGG1XmCanHF2SBG5dmGMX1ah-jCNLtehTzoRzGtnJW0PUsUOa58TTQ3VEOjfg2fPaOKIoukUGLFG-kt12ZC123nIEbMqN5BLgrpujJUGFqMb4fQatrWsw0iVnRAMnNlpFPYk4O_fDtqlJKsQ5LN6-FOHii_2n91tWo1HIjj9En4')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {/* Match Badge */}
                <div className="absolute top-4 right-4 bg-[var(--accent-purple)] text-white px-4 py-1.5 rounded-lg font-bold text-sm shadow-lg flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                  95% Match
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-extrabold">Habib University</h3>
                  <div className="flex items-center gap-2 text-white/90 font-medium">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    Karachi, Pakistan
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-wrap gap-2">
                <Badge variant="primary">Liberal Arts</Badge>
                <Badge variant="primary">Top 10 Global Ranking</Badge>
                <Badge variant="primary">Scholarship Available</Badge>
              </div>
            </Card>
            </Link>

            {/* University Card 2 */}
            <Card hoverEffect noPadding className="group">
              <div className="relative h-64 w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfHZJBqpCjfD0ShRJzY0EuLoXOtC4w1EYDCZKpmvN2gNkxiQRfaRcsPsCC8yI6S8C8HjysVVlQxWmKUZf1d-kMW26vBV9B9nMK37R7jec1-Jma81YQjLaXd4a6xwZgDZGLntWtteSXtPbw2pA9NvrgP3yVM_4V-TTJqPrrnvaj6bkuLHvaxXO8BVYGETdboLFfFc-2E7z4yryIhyfCheY1YbAgoFOXzinTDs5ihZNUNaoN3KgygHEyDtSAbq94AzPc6xgVZXEFNZc')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {/* Match Badge */}
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1.5 rounded-lg font-bold text-sm shadow-lg flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">
                    trending_up
                  </span>
                  88% Match
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-extrabold">NED University</h3>
                  <div className="flex items-center gap-2 text-white/90 font-medium">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    Karachi, Pakistan
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-wrap gap-2">
                <Badge variant="primary">Engineering Excellence</Badge>
                <Badge variant="primary">Historic Prestige</Badge>
                <Badge variant="primary">Public Sector</Badge>
              </div>
            </Card>

            {/* University Card 3 */}
            <Card hoverEffect noPadding className="group">
              <div className="relative h-64 w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQJHEUT7PBKriPbsXku4bWuDQUxwIdrjXiSLn08mrSdFjDWAE__ucSxci4hpC-fRgiMTqdRQyZ3EMx_p6s-JUzp4O9B_JnAzTzAxqu2AgspCsfR0YBuQ6LswBBXKRrEP1X65YJ_nJWyjQb57ihFqWta2m2kDFTlb8vcZBxQ4D6ppkzQfUXgh0wFFPDqYqqogqWVmp0gBXZn4smrWQnjhKT_c1vth3PI567D5YxdCBXJOuMrpQN26oQGMhkANHMI_KvQU0dXQOMJvk')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gray-500 text-white px-4 py-1.5 rounded-lg font-bold text-sm shadow-lg flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">
                    bolt
                  </span>
                  75% Match
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-extrabold">LUMS</h3>
                  <div className="flex items-center gap-2 text-white/90 font-medium">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    Lahore, Pakistan
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-wrap gap-2">
                <Badge variant="primary">Business School</Badge>
                <Badge variant="primary">Entrepreneurship</Badge>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
