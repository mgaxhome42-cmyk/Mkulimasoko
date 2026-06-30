<!DOCTYPE html>
<html lang="sw">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mkulima Soko Tanzania | Shamba Soko Kidijitali</title>
    <meta name="description" content="Soko kuu la kidijitali la mazao nchini Tanzania. Ungana na wakulima, weka mazao yako, na ufuatilie bei za soko live kutoka mikoani.">
    
    <!-- Google Search Console Key ya Mkuu Martan (Ili iwe Verified Moja kwa Moja) -->
    <meta name="google-site-verification" content="dhfBFe-kZZW_7USV7uHNoMPJfSVevbbdHB81k0z-RGQ" />
    
    <!-- Miundombinu ya Kupendezesha (Tailwind, Lucide Icons & Chart.js kwa Ajili ya Grafu) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-slate-50 text-slate-900 pb-24 font-sans antialiased selection:bg-emerald-500 selection:text-white">

    <!-- Urembo wa Bendera ya Taifa (Tanzania) Juu Kabisa -->
    <div class="fixed top-0 left-0 right-0 h-1 flex z-50">
        <div class="flex-1 bg-emerald-600"></div>
        <div class="flex-1 bg-yellow-400"></div>
        <div class="flex-1 bg-blue-600"></div>
        <div class="flex-1 bg-black"></div>
    </div>

    <!-- Sehemu ya Juu (App Header) -->
    <header class="bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 px-4 sticky top-0 z-30 shadow-sm">
        <div class="max-w-md mx-auto flex justify-between items-center">
            <div>
                <h1 class="text-xl font-black bg-gradient-to-r from-emerald-600 via-amber-500 to-blue-600 bg-clip-text text-transparent tracking-tight">Shamba Soko</h1>
                <p class="text-[10px] uppercase font-bold tracking-wider text-slate-400">Mkulima Soko Tanzania</p>
            </div>
            <div class="flex items-center gap-1.5">
                <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="bg-emerald-50 text-emerald-700 text-[10px] px-2.5 py-1 rounded-full font-bold border border-emerald-100">Soko Live 🇹🇿</span>
            </div>
        </div>
    </header>

    <!-- Muundo Mkuu wa Kurasa (Hapa ndipo tab zote zinapofanyia kazi) -->
    <main class="max-w-md mx-auto p-4" id="app-root">
        <!-- Inapakia mifumo... -->
    </main>

    <!-- Navigation ya Chini ya Simu (Mobile Navigation Menu) -->
    <nav class="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 py-3 flex justify-around shadow-xl z-40">
        <button onclick="badiliTab('soko')" id="btn-soko" class="flex flex-col items-center gap-1 transition-all text-emerald-600 font-bold scale-105">
            <i data-lucide="shopping-bag" class="w-5 h-5"></i>
            <span class="text-[11px] tracking-wide">Soko</span>
        </button>
        <button onclick="badiliTab('mkulima')" id="btn-mkulima" class="flex flex-col items-center gap-1 transition-all text-slate-400">
            <i data-lucide="sprout" class="w-5 h-5"></i>
            <span class="text-[11px] tracking-wide">Mkulima</span>
        </button>
        <button onclick="badiliTab('usafiri')" id="btn-usafiri" class="flex flex-col items-center gap-1 transition-all text-slate-400">
            <i data-lucide="truck" class="w-5 h-5"></i>
            <span class="text-[11px] tracking-wide">Usafiri</span>
        </button>
    </nav>

    <!-- Hifadhidata ya Ndani ya Kivinjari na Mantiki ya App (Database & State Management) -->
    <script>
        // Simulizi ya Database (Inasave kwenye Simu ya Mteja isipotee - LocalStorage)
        let SOKO_DATABASE = JSON.parse(localStorage.getItem('shamba_soko_db')) || [
            { id: 1, zao: "Mahindi Ghafi", bei: 850, eneo: "Iringa", kiasi: "Mifuko 50", kundi: "Nafaka", tarehe: "Leo" },
            { id: 2, zao: "Mpunga wa Kyela", bei: 1300, eneo: "Mbeya", kiasi: "Tani 3", kundi: "Nafaka", tarehe: "Leo" },
            { id: 3, zao: "Viazi Mviringo", bei: 1100, eneo: "Njombe", kiasi: "Mifuko 20", kundi: "Mbogamboga", tarehe: "Jana" },
            { id: 4, zao: "Maharage ya Njano", bei: 2200, eneo: "Dodoma", kiasi: "Mifuko 15", kundi: "Nafaka", tarehe: "Leo" }
        ];

        let kichujioKikundi = "Zote";
        let nenoLaKutafuta = "";

        function hifadhiKwenyeDatabase() {
            localStorage.setItem('shamba_soko_db', JSON.stringify(SOKO_DATABASE));
        }

        // Mfumo wa Kubadilisha Kurasa (Routing/Tabs)
        function badiliTab(jinaLaTab) {
            const root = document.getElementById('app-root');
            
            // Rekebisha Rangi za Menu ya Chini
            ['soko', 'mkulima', 'usafiri'].forEach(t => {
                const btn = document.getElementById(`btn-${t}`);
                if (t === jinaLaTab) {
                    btn.className = `flex flex-col items-center gap-1 transition-all font-bold scale-105 ${t === 'soko' ? 'text-amber-500' : t === 'mkulima' ? 'text-emerald-600' : 'text-blue-600'}`;
                } else {
                    btn.className = "flex flex-col items-center gap-1 transition-all text-slate-400";
                }
            });

            // PHASE 2: SEHEMU YA MANUNUZI (SOKO)
            if (jinaLaTab === 'soko') {
                root.innerHTML = `
                    <div class="space-y-4">
                        <!-- Sehemu ya Utafutaji -->
                        <div class="relative">
                            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"></i>
                            <input type="text" id="search-input" oninput="tafutaZao(this.value)" value="${nenoLaKutafuta}" placeholder="Tafuta mahindi, viazi, mpunga..." class="w-full bg-white border border-slate-200/80 rounded-2xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500 shadow-sm">
                        </div>

                        <!-- Vikundi vya Mazao -->
                        <div class="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                            ${["Zote", "Nafaka", "Mbogamboga", "Matunda"].map(k => `
                                <button onclick="setKundi('${k}')" class="px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${kichujioKikundi === k ? 'bg-amber-500 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200/60'}">${k}</button>
                            `).join('')}
                        </div>

                        <div class="flex justify-between items-center pt-2">
                            <h2 class="text-base font-bold text-slate-800 flex items-center gap-1.5"><i data-lucide="shopping-bag" class="w-4 h-4 text-amber-500"></i> Mazao Yanayouzwa</h2>
                            <span class="text-xs bg-slate-100 px-2 py-0.5 rounded-md font-bold text-slate-500" id="hesabu-mazao">0</span>
                        </div>

                        <!-- Orodha ya Mazao -->
                        <div class="grid gap-3" id="soko-listings"></div>
                    </div>`;
                jengaOrodhaYaSoko();
            } 
            
            // PHASE 3: SEHEMU YA MKULIMA (DASHBOARD)
            else if (jinaLaTab === 'mkulima') {
                root.innerHTML = `
                    <div class="space-y-5">
                        <h2 class="text-base font-bold text-slate-800 flex items-center gap-1.5"><i data-lucide="sprout" class="w-4 h-4 text-emerald-600"></i> Jopo la Mkulima</h2>
                        
                        <!-- Fomu ya Kuongeza Zao -->
                        <form id="form-ongeza-zao" class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3.5">
                            <div class="flex items-center gap-1.5 text-xs font-bold text-slate-700 pb-1 border-b border-slate-50">
                                <i data-lucide="plus-circle" class="w-4 h-4 text-emerald-500"></i> Weka Bidhaa Yako Sokoni Live
                            </div>
                            <div>
                                <label class="text-[11px] font-bold text-slate-500 block mb-1">Aina ya Zao</label>
                                <input type="text" id="form-zao" class="w-full bg-slate-50 border border-slate-200/60 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500" placeholder="Mf. Mahindi ya Njano, Mpunga" required>
                            </div>
                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="text-[11px] font-bold text-slate-500 block mb-1">Bei (kwa Kilo)</label>
                                    <input type="number" id="form-bei" class="w-full bg-slate-50 border border-slate-200/60 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500" placeholder="TSH" required>
                                </div>
                                <div>
                                    <label class="text-[11px] font-bold text-slate-500 block mb-1">Kiasi Kilichopo</label>
                                    <input type="text" id="form-kiasi" class="w-full bg-slate-50 border border-slate-200/60 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500" placeholder="Mf. Mifuko 30, Tani 2" required>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="text-[11px] font-bold text-slate-500 block mb-1">Mkoa / Eneo</label>
                                    <input type="text" id="form-eneo" class="w-full bg-slate-50 border border-slate-200/60 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500" placeholder="Mf. Iringa, Mbeya" required>
                                </div>
                                <div>
                                    <label class="text-[11px] font-bold text-slate-500 block mb-1">Kundi</label>
                                    <select id="form-kundi" class="w-full bg-slate-50 border border-slate-200/60 rounded-xl p-2.5 text-sm focus:outline-none focus:border-emerald-500">
                                        <option value="Nafaka">Nafaka</option>
                                        <option value="Mbogamboga">Mbogamboga</option>
                                        <option value="Matunda">Matunda</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 text-xs font-bold shadow-md shadow-emerald-600/10 transition-all flex items-center justify-center gap-1.5 mt-2">
                                <i data-lucide="send" class="w-3.5 h-3.5"></i> Pakia Kwenye Soko Sasa Hivi
                            </button>
                        </form>

                        <!-- Grafu ya Mwenendo wa Bei (Recharts Visualization Mode via ChartJS) -->
                        <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                            <div class="flex justify-between items-center mb-3">
                                <h3 class="text-xs font-bold text-slate-700 flex items-center gap-1"><i data-lucide="trending-up" class="w-3.5 h-3.5 text-emerald-500"></i> Mwenendo wa Bei Kitaifa (TSH/Kg)</h3>
                                <span class="text-[10px] bg-slate-50 text-slate-400 px-2 py-0.5 rounded font-mono font-bold">Juni 2026</span>
                            </div>
                            <div class="relative h-44 w-full">
                                <canvas id="chart-bei-mikoani"></canvas>
                            </div>
                        </div>
                    </div>`;

                // Kusikiliza fomu ikitumwa
                document.getElementById('form-ongeza-zao').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const zao = document.getElementById('form-zao').value;
                    const bei = Number(document.getElementById('form-bei').value);
                    const kiasi = document.getElementById('form-kiasi').value;
                    const eneo = document.getElementById('form-eneo').value;
                    const kundi = document.getElementById('form-kundi').value;

                    const bidhaaMpya = { id: Date.now(), zao, bei, eneo, kiasi, kundi, tarehe: "Sasa hivi" };
                    SOKO_DATABASE.unshift(bidhaaMpya);
                    hifadhiKwenyeDatabase();

                    alert('Hongera! Zao lako limepakiwa sokoni kwa mafanikio.');
                    badiliTab('soko');
                });

                washaGrafuYaMazingira();
            } 
            
            // PHASE 4: LOGISTICS (USAREFI)
            else if (jinaLaTab === 'usafiri') {
                root.innerHTML = `
                    <div class="space-y-4">
                        <h2 class="text-base font-bold text-slate-800 flex items-center gap-1.5"><i data-lucide="truck" class="w-4 h-4 text-blue-600"></i> Usafirishaji wa Mazao</h2>
                        
                        <div class="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-5 rounded-2xl shadow-md shadow-blue-600/10 space-y-2">
                            <h3 class="text-sm font-bold flex items-center gap-1.5"><i data-lucide="info"></i> Unatafuta Lori la Kusafirisha?</h3>
                            <p class="text-xs text-blue-100/90 leading-relaxed">Ungana na madereva wa malori na fuso waliopo karibu na eneo lako ili uwafikishe mzigo wako sokoni kwa usalama.</p>
                        </div>

                        <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                            <h4 class="text-xs font-bold text-slate-700 flex items-center gap-1"><i data-lucide="phone-call" class="w-3.5 h-3.5 text-blue-500"></i> Madereva Waliopo Karibu Nawe</h4>
                            
                            <div class="divide-y divide-slate-50">
                                <div class="py-2.5 flex justify-between items-center">
                                    <div>
                                        <p class="text-xs font-bold text-slate-800">Mzee Kassim - Fuso (Tani 7)</p>
                                        <p class="text-[10px] text-slate-400">Ruta: Iringa -> Dar es Salaam</p>
                                    </div>
                                    <span class="text-[11px] bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded-full">Yupo Wazi</span>
                                </div>
                                <div class="py-2.5 flex justify-between items-center">
                                    <div>
                                        <p class="text-xs font-bold text-slate-800">Peter Minja - Scania (Tani 15)</p>
                                        <p class="text-[10px] text-slate-400">Ruta: Mbeya -> Dodoma</p>
                                    </div>
                                    <span class="text-[11px] bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded-full">Yupo Wazi</span>
                                </div>
                            </div>
                            <button onclick="alert('Mfumo wa kupanga usafiri unajiandaa, utakuwa tayari hivi punde!')" class="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2.5 rounded-xl transition-all">Omba Gari la Mzigo</button>
                        </div>
                    </div>`;
            }

            lucide.createIcons();
        }

        // Mantiki ya Kuchuja na Kuonyesha Bidhaa
        function jengaOrodhaYaSoko() {
            const listContainer = document.getElementById('soko-listings');
            
            let dataIliyochujwa = SOKO_DATABASE.filter(item => {
                const kundiLinalingana = kichujioKikundi === "Zote" || item.kundi === kichujioKikundi;
                const jinaLinalingana = item.zao.toLowerCase().includes(nenoLaKutafuta.toLowerCase()) || item.eneo.toLowerCase().includes(nenoLaKutafuta.toLowerCase());
                return kundiLinalingana && jinaLinalingana;
            });

            document.getElementById('hesabu-mazao').innerText = `${dataIliyochujwa.length} bidhaa`;

            if (dataIliyochujwa.length === 0) {
                listContainer.innerHTML = `
                    <div class="text-center py-12 bg-white rounded-2xl border border-slate-100 p-6">
                        <i data-lucide="shopping-bag" class="w-8 h-8 text-slate-200 mx-auto mb-2"></i>
                        <p class="text-xs font-bold text-slate-600">Hakuna kilichopatikana!</p>
                        <p class="text-[11px] text-slate-400 mt-0.5">Jaribu neno lingine au badilisha kikundi cha bidhaa.</p>
                    </div>`;
                lucide.createIcons();
                return;
            }

            listContainer.innerHTML = dataIliyochujwa.map(z => `
                <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center transition-all hover:scale-[1.01]">
                    <div class="space-y-1">
                        <div class="flex items-center gap-1.5">
                            <h3 class="font-bold text-slate-800 text-sm">${z.zao}</h3>
                            <span class="text-[9px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">${z.kundi}</span>
                        </div>
                        <p class="text-[11px] text-slate-400 flex items-center gap-1">
                            <i data-lucide="map-pin" class="w-3 h-3 text-slate-400"></i> ${z.eneo} &bull; <i data-lucide="layers" class="w-3 h-3 text-slate-400"></i> Kiasi: ${z.kiasi}
                        </p>
                        <span class="text-[9px] text-slate-300 font-medium inline-block">Muda: ${z.tarehe}</span>
                    </div>
                    <div class="text-right space-y-1.5">
                        <p class="text-emerald-600 font-black text-sm">TSH ${Number(z.bei).toLocaleString()}<span class="text-[10px] text-slate-400 font-normal">/Kg</span></p>
                        <button onclick="ondoaBidhaa(${z.id})" class="text-[10px] font-bold text-red-400 hover:text-red-500 hover:underline transition-all block w-full text-right">Futa</button>
                    </div>
                </div>
            `).join('');
            
            lucide.createIcons();
        }

        function setKundi(kundi) {
            kichujioKikundi = kundi;
            badiliTab('soko');
        }

        function tafutaZao(thamani) {
            nenoLaKutafuta = thamani;
            jengaOrodhaYaSoko();
        }

        function ondoaBidhaa(id) {
            if(confirm("Je, una uhakika unataka kufuta bidhaa hii sokoni?")) {
                SOKO_DATABASE = SOKO_DATABASE.filter(z => z.id !== id);
                hifadhiKwenyeDatabase();
                jengaOrodhaYaSoko();
            }
        }

        // Mantiki ya Kutengeneza Grafu ya Bei za Soko Kitaifa
        function washaGrafuYaMazingira() {
            const ctx = document.getElementById('chart-bei-mikoani').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Mahindi', 'Mpunga', 'Viazi', 'Maharage'],
                    datasets: [{
                        data: [850, 1300, 1100, 2200],
                        backgroundColor: ['#059669', '#d97706', '#2563eb', '#dc2626'],
                        borderRadius: 8,
                        borderSkipped: false,
                        barThickness: 24
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { grid: { display: false }, ticks: { font: { size: 10 } } },
                        x: { grid: { display: false }, ticks: { font: { size: 10, weight: 'bold' } } }
                    }
                }
            });
        }

        // Kuanzisha App Kwenye Soko Moja kwa Moja Wakati wa Kuload
        window.onload = () => badiliTab('soko');
    </script>
</body>
</html>
