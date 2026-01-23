import { getCurrentUser } from '../utils/userUtils';

function CampusOverview() {
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">Campus Overview</h2>
        <p className="text-slate-500 font-medium text-lg">Experience the future of workspace at our flagship technology hub.</p>
      </div>

      {/* Gaming & Recreation & Relax Zones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Gaming & Recreation</h3>
            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase">Top Rated</span>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="immersive-card relative h-56 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                alt="Arcade Room" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPlYApVjUzn2Yx_0WzE0IhmCcqIoUXa0zsFpEq0T-HBe3cAHjVCbh2tFiB7NiqTf6k-G_gi2TqOGXn9Y2tMra3UIyGdiNg30o1Yhu3__w1Gncfx-2y0t_ryzOMy9FsPHFRcQ-2Vj1CkcvcLzJHV0g4Hw0qKhKKcbQWgcmyIUMWbmCzwHoDtijf6Df-cgV7dW-1FLwv1YugFw5YowDwA2L0MWD3dfR9Kgv4wtgiTy2VkYSk8D4aYB39W4nPdKSVHAbtblqsJm0q9Goq"
              />
              <div className="absolute inset-0 text-overlay-gradient flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Building BGL 16</span>
                <h4 className="text-xl font-bold text-white">The Arcade Hall</h4>
                <p className="text-slate-200 text-sm mt-1 opacity-90">Retro cabinets, pool tables, and next-gen console lounge.</p>
              </div>
            </div>
            <div className="immersive-card relative h-56 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                alt="Wellness Center" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf0byggYaTG-pxQlwr3KoEeCZX2ucTIb7p1DWPWU6YNjuOf11hr53LKZnpGjtsphpjmXZgzYD0RWOjKSPyS0hQS_9KG7T8a1CvqhSTT3Z3j6YI1rD1HR5Y6A6l8SUFmhlVhADo-W0auIYipMZkjjf2UxvnMf9K5oIbk65NtLy2p8c2PLfCIclCOldK9PWPqMGvi0cKmwBlhnYn8xLwAO0WOXvatH_Mw_EvZt8BKkGFkcvaQBekidKIriA_UaehKtP60PRP6ScheUb7"
              />
              <div className="absolute inset-0 text-overlay-gradient flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Building BGL 17</span>
                <h4 className="text-xl font-bold text-white">Wellness Center</h4>
                <p className="text-slate-200 text-sm mt-1 opacity-90">State-of-the-art gym, Olympic pool, and yoga sanctuary.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Relax Zones</h3>
            <span className="text-[10px] font-black text-slate-400 uppercase">Focus Spaces</span>
          </div>
          <div className="immersive-card relative h-full min-h-[472px] rounded-2xl overflow-hidden group">
            <img 
              alt="Zen Garden" 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAALkV-HDgqJKsS1DdEiHVfeztYJsaG-a1khK_j7KOxEJvLaM1LWV108nZBtL-J986n4wXPWr_jp39DqxTUJFY4rTypFhdVHOJZT1q-EPTOHGS2aKWZQjbw9HxkgVermsZs8r2vHTl-2YSgtnyERqotvJ-VU6PegwtzAa899ZHFc5TXCmqprNZJwCV_6lewQDy-Ed4ejKptub3M559b4EiXJWEWMATh4zFpvJerv1B863whkIgP9RhgDeUgsENulHCzpiQvN64OZDxt"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] p-8 flex flex-col justify-end">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-white fill-icon">potted_plant</span>
                    <h4 className="text-xl font-bold text-white">Zen Garden</h4>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">Located in Building C. Features noise-canceling outdoor pods, meditation water features, and ergonomic benches.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-white fill-icon">airline_seat_flat</span>
                    <h4 className="text-xl font-bold text-white">Nap Pods</h4>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">BGL 12 Level 3. Fully automated climate-controlled pods for 20-minute power sessions. Bookable via Employee App.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Cafeteria & Dining */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Cafeteria & Dining</h3>
          <div className="flex items-center gap-2">
            <span className="size-2 bg-emerald-500 rounded-full"></span>
            <span className="text-[10px] font-black text-emerald-500 uppercase">Live Menus</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="immersive-card group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
            <img 
              alt="Gourmet Salad" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXXPlJ2tTUo9GHqwDzvjB8paThUD3izv3phFi44PWywAKfHI8YQ34J6p6a3gEBulnABs5chFZ7Ws17fua3Z6ZPnMSWHMgL6FpBKIIwNyWHXtNCXEVu_NTvma3PlkoK18J-4jIiZBBZiGsUo69VY6jm2ZGZJifhUBoB13Yb36pEalypICerq167cXn_jzpuIOw0uDVVQ3NlYUg_73_UuIrKKVbFe2efpjju7Lys6bHdNnI98XgaHilaMLg4Igf6sVmbdKqS1nYFBdqP"
            />
            <div className="absolute inset-0 text-overlay-gradient flex flex-col justify-end p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-white">The Main Canteen</h4>
                <span className="px-2 py-0.5 bg-primary text-white text-[9px] font-black rounded uppercase">Special</span>
              </div>
              <p className="text-slate-200 text-xs font-medium uppercase tracking-widest mb-1">Today's Pick</p>
              <p className="text-white text-sm font-semibold italic">Ahi Tuna Poké with Organic Black Rice & Mango</p>
            </div>
          </div>
          <div className="immersive-card group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
            <img 
              alt="Artisan Pizza" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsIRDNUx5OoRAU9IoZjJA2GsVc4k4NnfUekPi84i3AL_2qNa14j2--PCxEgV9cM6Td6OZl5-NFkL4LTbcZO-kJr-VdME73TT-G3Yu3yc-3m9kFZHBMFLbV8g4ck6TwmtbZBOibSrlmbOLDILeEgLFfC9AyA9HFnUlm0XxuyGKusa27vdQidQ6RaQsMv1Aw-YwtyuUR7t8zxLoo3k6Z2LwqAwTZ4JFs0zaK0sktxToTBlcIdbcp73hEs3W_6CYPXZsxvmbNMzzDo24C"
            />
            <div className="absolute inset-0 text-overlay-gradient flex flex-col justify-end p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-white">The Hub Bistro</h4>
                <span className="px-2 py-0.5 bg-emerald-500 text-white text-[9px] font-black rounded uppercase">Vegan</span>
              </div>
              <p className="text-slate-200 text-xs font-medium uppercase tracking-widest mb-1">Artisan Flatbread</p>
              <p className="text-white text-sm font-semibold italic">Truffle Wild Mushroom with Roasted Garlic Cream</p>
            </div>
          </div>
          <div className="immersive-card group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
            <img 
              alt="Coffee" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF7hpQuALAfAGLk_BsQ9cQf6yIn20MGTEfE9NBJdrln8W5lfQyP6M3CsuCS3-SOdMevH1VdKuEuF2R7cmA-4A_IOOYfpyPdRk_bvOWjAVIv50JEUQ3Bhua29OtOn2E0_bUlWFwvXUuFjSFKASUXyaUNbPSyL_Ipt9SJk7_h3AAekqLxFi4ybxM6v94YFb8xXOze830u3niuK2F4YntS22yEPFSyBmnqRFFNSejMXJH9j-wHB0hYBqMkeZ7d_ItuHMOcU4wLodwWva_"
            />
            <div className="absolute inset-0 text-overlay-gradient flex flex-col justify-end p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-white">Express Brew</h4>
                <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-black rounded uppercase">Popular</span>
              </div>
              <p className="text-slate-200 text-xs font-medium uppercase tracking-widest mb-1">Barista's Choice</p>
              <p className="text-white text-sm font-semibold italic">Maple Oat Milk Shaken Espresso with Sea Salt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Building Features */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Building Features</h3>
          <span className="text-[10px] font-black text-slate-400 uppercase">Campus Landmarks</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 'bgl12', name: 'BGL 12', features: ['Executive Briefing Center', 'Innovation Lab'], icon: 'corporate_fare', icon2: 'lightbulb', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVlkIIz6biwbdfZkx-wVTGm8ztaaXI9x0HFHfrkWCxuhf_-kLkBSyqIzhdt6ZNevStrmnLO_BS3ainAmbyggpYY_91qPar4A53dkqgReHhSUToUnCB0o7IfOUrYKRkL-qFbN_rwbauJBg90t9oa0-qL6WZ01ougSIgmGZiNnjmxb6p3NaXqaEVr9koNUBekqMQAkrEezcwVsHxWMDtGBAXwEoiYiR2ZX_99IZ9SncovQ63Jonc8g6t5yIYUoPfHeDWmJGVrnMbjcBf' },
            { id: 'bgl13', name: 'BGL 13', features: ['Collaborative Hub', 'Barista Station'], icon: 'groups', icon2: 'coffee', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAALkV-HDgqJKsS1DdEiHVfeztYJsaG-a1khK_j7KOxEJvLaM1LWV108nZBtL-J986n4wXPWr_jp39DqxTUJFY4rTypFhdVHOJZT1q-EPTOHGS2aKWZQjbw9HxkgVermsZs8r2vHTl-2YSgtnyERqotvJ-VU6PegwtzAa899ZHFc5TXCmqprNZJwCV_6lewQDy-Ed4ejKptub3M559b4EiXJWEWMATh4zFpvJerv1B863whkIgP9RhgDeUgsENulHCzpiQvN64OZDxt' },
            { id: 'bgl14', name: 'BGL 14', features: ['Creative Studio', 'Podcasting Wing'], icon: 'movie', icon2: 'mic', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf0byggYaTG-pxQlwr3KoEeCZX2ucTIb7p1DWPWU6YNjuOf11hr53LKZnpGjtsphpjmXZgzYD0RWOjKSPyS0hQS_9KG7T8a1CvqhSTT3Z3j6YI1rD1HR5Y6A6l8SUFmhlVhADo-W0auIYipMZkjjf2UxvnMf9K5oIbk65NtLy2p8c2PLfCIclCOldK9PWPqMGvi0cKmwBlhnYn8xLwAO0WOXvatH_Mw_EvZt8BKkGFkcvaQBekidKIriA_UaehKtP60PRP6ScheUb7' },
            { id: 'bgl15', name: 'BGL 15', features: ['DevX Experience Zone', 'Grand Atrium'], icon: 'terminal', icon2: 'stadium', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPlYApVjUzn2Yx_0WzE0IhmCcqIoUXa0zsFpEq0T-HBe3cAHjVCbh2tFiB7NiqTf6k-G_gi2TqOGXn9Y2tMra3UIyGdiNg30o1Yhu3__w1Gncfx-2y0t_ryzOMy9FsPHFRcQ-2Vj1CkcvcLzJHV0g4Hw0qKhKKcbQWgcmyIUMWbmCzwHoDtijf6Df-cgV7dW-1FLwv1YugFw5YowDwA2L0MWD3dfR9Kgv4wtgiTy2VkYSk8D4aYB39W4nPdKSVHAbtblqsJm0q9Goq' },
            { id: 'bgl16', name: 'BGL 16', features: ['Gaming HQ', 'Global Food Court'], icon: 'sports_esports', icon2: 'restaurant', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF7hpQuALAfAGLk_BsQ9cQf6yIn20MGTEfE9NBJdrln8W5lfQyP6M3CsuCS3-SOdMevH1VdKuEuF2R7cmA-4A_IOOYfpyPdRk_bvOWjAVIv50JEUQ3Bhua29OtOn2E0_bUlWFwvXUuFjSFKASUXyaUNbPSyL_Ipt9SJk7_h3AAekqLxFi4ybxM6v94YFb8xXOze830u3niuK2F4YntS22yEPFSyBmnqRFFNSejMXJH9j-wHB0hYBqMkeZ7d_ItuHMOcU4wLodwWva_' },
            { id: 'bgl18', name: 'BGL 18', features: ['Customer Experience Center', 'Rooftop Garden'], icon: 'support_agent', icon2: 'deck', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsIRDNUx5OoRAU9IoZjJA2GsVc4k4NnfUekPi84i3AL_2qNa14j2--PCxEgV9cM6Td6OZl5-NFkL4LTbcZO-kJr-VdME73TT-G3Yu3yc-3m9kFZHBMFLbV8g4ck6TwmtbZBOibSrlmbOLDILeEgLFfC9AyA9HFnUlm0XxuyGKusa27vdQidQ6RaQsMv1Aw-YwtyuUR7t8zxLoo3k6Z2LwqAwTZ4JFs0zaK0sktxToTBlcIdbcp73hEs3W_6CYPXZsxvmbNMzzDo24C' }
          ].map((building) => (
            <div key={building.id} className="immersive-card group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
              <img 
                alt={`${building.name} Exterior`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={building.img}
              />
              <div className="absolute inset-0 text-overlay-gradient flex flex-col justify-end p-6">
                <h4 className="text-4xl font-extrabold text-white mb-2">{building.name}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`material-symbols-outlined text-secondary text-sm fill-icon`}>{building.icon}</span>
                    <p className="text-white text-sm font-semibold">{building.features[0]}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`material-symbols-outlined text-secondary text-sm fill-icon`}>{building.icon2}</span>
                    <p className="text-white text-sm font-semibold">{building.features[1]}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus Events */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Campus Events</h3>
          <div className="flex gap-6">
            <button className="text-[11px] font-black text-primary border-b-2 border-primary pb-1">ONGOING</button>
            <button className="text-[11px] font-bold text-slate-400 pb-1">UPCOMING</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="immersive-card relative min-h-[160px] rounded-2xl overflow-hidden flex items-stretch cursor-pointer">
            <div className="w-1/3 relative overflow-hidden">
              <img 
                alt="Symposium" 
                className="absolute inset-0 w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVlkIIz6biwbdfZkx-wVTGm8ztaaXI9x0HFHfrkWCxuhf_-kLkBSyqIzhdt6ZNevStrmnLO_BS3ainAmbyggpYY_91qPar4A53dkqgReHhSUToUnCB0o7IfOUrYKRkL-qFbN_rwbauJBg90t9oa0-qL6WZ01ougSIgmGZiNnjmxb6p3NaXqaEVr9koNUBekqMQAkrEezcwVsHxWMDtGBAXwEoiYiR2ZX_99IZ9SncovQ63Jonc8g6t5yIYUoPfHeDWmJGVrnMbjcBf"
              />
            </div>
            <div className="flex-1 bg-white dark:bg-slate-900 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Live Now</span>
              </div>
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">Annual Tech Symposium</h4>
              <p className="text-sm text-slate-500 mt-1">Main Auditorium • Ending in 1h 45m</p>
              <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs">
                RSVP Status: Confirmed <span className="material-symbols-outlined text-sm">check_circle</span>
              </div>
            </div>
          </div>
          <div className="immersive-card relative min-h-[160px] rounded-2xl overflow-hidden flex items-stretch cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-1/3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-slate-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-white/20 text-7xl select-none">diversity_3</span>
              </div>
            </div>
            <div className="flex-1 bg-white dark:bg-slate-900 p-6 flex flex-col justify-center border-l border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Oct 12 • 10:00 AM</span>
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">Engineering Town Hall</h4>
              <p className="text-sm text-slate-500 mt-1">Virtual & BGL 15 Floor 2</p>
              <p className="text-[11px] text-slate-400 mt-3 font-semibold">Q&A Session with CTO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parking & Transit */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Parking & Transit</h3>
          <span className="text-[10px] font-black text-slate-400 uppercase">Live Telemetry</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="immersive-card bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center mb-5">
              <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined text-primary">garage_home</span>
              </div>
              <span className="text-[10px] font-black text-emerald-500">42% FULL</span>
            </div>
            <h4 className="text-xs font-black text-slate-900 dark:text-white mb-3">North Garage (P1)</h4>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full" style={{ width: '42%' }}></div>
            </div>
          </div>
          <div className="immersive-card bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center mb-5">
              <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined text-primary">garage_home</span>
              </div>
              <span className="text-[10px] font-black text-amber-500">89% FULL</span>
            </div>
            <h4 className="text-xs font-black text-slate-900 dark:text-white mb-3">South Garage (P2)</h4>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full" style={{ width: '89%' }}></div>
            </div>
          </div>
          <div className="immersive-card bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center mb-5">
              <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined text-primary">airport_shuttle</span>
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase">15 min freq</span>
            </div>
            <h4 className="text-xs font-black text-slate-900 dark:text-white mb-1">Cisco Shuttle</h4>
            <p className="text-[10px] text-slate-400 font-bold">Route A: Downtown Loop</p>
          </div>
          <div className="immersive-card bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center mb-5">
              <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined text-primary">ev_station</span>
              </div>
              <span className="text-[10px] font-black text-primary uppercase">4 Available</span>
            </div>
            <h4 className="text-xs font-black text-slate-900 dark:text-white mb-1">EV Charging</h4>
            <p className="text-[10px] text-slate-400 font-bold">P1, Level 2 Stations</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CampusOverview;
