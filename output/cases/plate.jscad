function cutout_extrude_4_outline_fn(){
    return new CSG.Path2D([[-13.4176951,-18.7407433],[16.4681459,-16.1260711]]).appendArc([18.2862239,-13.9593703],{"radius":2,"clockwise":false,"large":false}).appendPoint([18.1990416,-12.9628719]).appendArc([20.086759,-10.7913014],{"radius":2,"clockwise":true,"large":false}).appendPoint([35.0836386,-10.0053482]).appendArc([36.9762257,-7.9034171],{"radius":2,"clockwise":false,"large":false}).appendPoint([36.4005142,3.0818119]).appendArc([38.3628685,5.1861793],{"radius":2,"clockwise":true,"large":false}).appendPoint([47.6167375,5.3477062]).appendArc([49.6489014,3.2433388],{"radius":2,"clockwise":true,"large":false}).appendPoint([48.8852358,-11.3282684]).appendArc([50.7778229,-13.4301995],{"radius":2,"clockwise":false,"large":false}).appendPoint([74.6414793,-14.6808407]).appendArc([75.0544453,-14.7462481],{"radius":2,"clockwise":true,"large":false}).appendPoint([92.2409814,-19.3513666]).appendArc([92.6313244,-19.5012053],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.7433079,-39.4297562]).appendArc([134.4333019,-38.5557242],{"radius":2,"clockwise":false,"large":false}).appendPoint([148.5070074,-10.9345218]).appendArc([147.6329754,-8.2445278],{"radius":2,"clockwise":false,"large":false}).appendPoint([142.2869361,-5.5205848]).appendArc([141.4129041,-2.8305908],{"radius":2,"clockwise":true,"large":false}).appendPoint([148.2227616,10.5345071]).appendArc([147.3487296,13.2245011],{"radius":2,"clockwise":false,"large":false}).appendPoint([120.6185337,26.8442161]).appendArc([117.9285397,25.9701841],{"radius":2,"clockwise":false,"large":false}).appendPoint([111.2973428,12.9557274]).appendPoint([121.8642654,88.1432888]).appendArc([120.1620755,90.4021711],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.6626139,92.86156]).appendArc([100.9519163,95.0511531],{"radius":2,"clockwise":true,"large":false}).appendPoint([101.0515706,95.9993002]).appendArc([99.2715838,98.197401],{"radius":2,"clockwise":false,"large":false}).appendPoint([81.6969507,100.0445694]).appendArc([79.9108796,102.1731262],{"radius":2,"clockwise":true,"large":false}).appendPoint([79.9773833,103.1241738]).appendPoint([48.0553337,105.3563809]).appendArc([45.9206927,103.5007659],{"radius":2,"clockwise":false,"large":false}).appendPoint([45.6166516,99.1527753]).appendArc([43.6564283,97.2925929],{"radius":2,"clockwise":true,"large":false}).appendPoint([21.7769895,96.9106859]).appendArc([19.8121989,94.8760857],{"radius":2,"clockwise":false,"large":false}).appendPoint([20.014888,83.2640379]).appendArc([18.1198646,81.231874],{"radius":2,"clockwise":true,"large":false}).appendPoint([0.3098444,80.2984904]).appendArc([-1.5827427,78.1965593],{"radius":2,"clockwise":false,"large":false}).appendPoint([-1.4986011,76.5910415]).appendArc([-3.3215488,74.4939801],{"radius":2,"clockwise":true,"large":false}).appendPoint([-21.4360232,72.909169]).appendArc([-23.2541012,70.7424682],{"radius":2,"clockwise":false,"large":false}).appendPoint([-15.5843959,-16.9226653]).appendArc([-13.4176951,-18.7407433],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[10.5754949,37.2767933],[24.5563083,38.0094967]]).appendPoint([23.8236049,51.9903101]).appendPoint([9.8427915,51.2576067]).appendPoint([10.5754949,37.2767933]).close().innerToCAG()
.union(
    new CSG.Path2D([[59.3163868,-3.363277],[73.2972002,-4.0959804]]).appendPoint([74.0299036,9.884833]).appendPoint([60.0490902,10.6175364]).appendPoint([59.3163868,-3.363277]).close().innerToCAG()
).union(
    new CSG.Path2D([[12.5642613,-0.6711291],[26.5450747,0.0615743]]).appendPoint([25.8123713,14.0423877]).appendPoint([11.8315579,13.3096843]).appendPoint([12.5642613,-0.6711291]).close().innerToCAG()
).union(
    new CSG.Path2D([[9.5811117,56.2507545],[23.5619251,56.9834579]]).appendPoint([22.8292217,70.9642713]).appendPoint([8.8484083,70.2315679]).appendPoint([9.5811117,56.2507545]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.5698781,18.3028321],[25.5506915,19.0355355]]).appendPoint([24.8179881,33.0163489]).appendPoint([10.8371747,32.2836455]).appendPoint([11.5698781,18.3028321]).close().innerToCAG()
).union(
    new CSG.Path2D([[72.8451139,57.2353248],[86.7684204,55.7719263]]).appendPoint([88.2318189,69.6952328]).appendPoint([74.3085124,71.1586313]).appendPoint([72.8451139,57.2353248]).close().innerToCAG()
).union(
    new CSG.Path2D([[70.8590731,38.3394088],[84.7823796,36.8760103]]).appendPoint([86.2457781,50.7993168]).appendPoint([72.3224716,52.2627153]).appendPoint([70.8590731,38.3394088]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.8730323,19.4434928],[82.7963388,17.9800943]]).appendPoint([84.2597373,31.9034008]).appendPoint([70.3364308,33.3667993]).appendPoint([68.8730323,19.4434928]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.8311547,76.1312408],[88.7544612,74.6678423]]).appendPoint([90.2178597,88.5911488]).appendPoint([76.2945532,90.0545473]).appendPoint([74.8311547,76.1312408]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.203355,72.5540366],[44.2012227,72.7983703]]).appendPoint([43.956889,86.796238]).appendPoint([29.9590213,86.5519043]).appendPoint([30.203355,72.5540366]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.5349507,53.5569304],[44.5328184,53.8012641]]).appendPoint([44.2884847,67.7991318]).appendPoint([30.290617,67.5547981]).appendPoint([30.5349507,53.5569304]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.8665464,34.5598242],[44.8644141,34.8041579]]).appendPoint([44.6200804,48.8020256]).appendPoint([30.6222127,48.5576919]).appendPoint([30.8665464,34.5598242]).close().innerToCAG()
).union(
    new CSG.Path2D([[31.1981421,15.562718],[45.1960098,15.8070517]]).appendPoint([44.9516761,29.8049194]).appendPoint([30.9538084,29.5605857]).appendPoint([31.1981421,15.562718]).close().innerToCAG()
).union(
    new CSG.Path2D([[54.3268125,80.35801],[68.2927092,79.3814193]]).appendPoint([69.2692999,93.347316]).appendPoint([55.3034032,94.3239067]).appendPoint([54.3268125,80.35801]).close().innerToCAG()
).union(
    new CSG.Path2D([[51.6760665,42.450576],[65.6419632,41.4739853]]).appendPoint([66.6185539,55.439882]).appendPoint([52.6526572,56.4164727]).appendPoint([51.6760665,42.450576]).close().innerToCAG()
).union(
    new CSG.Path2D([[53.0014395,61.404293],[66.9673362,60.4277023]]).appendPoint([67.9439269,74.393599]).appendPoint([53.9780302,75.3701897]).appendPoint([53.0014395,61.404293]).close().innerToCAG()
).union(
    new CSG.Path2D([[50.3506935,23.496859],[64.3165902,22.5202683]]).appendPoint([65.2931809,36.486165]).appendPoint([51.3272842,37.4627557]).appendPoint([50.3506935,23.496859]).close().innerToCAG()
).union(
    new CSG.Path2D([[79.6038326,-5.0948529],[93.1267942,-8.7183195]]).appendPoint([96.7502608,4.8046421]).appendPoint([83.2272992,8.4281087]).appendPoint([79.6038326,-5.0948529]).close().innerToCAG()
).union(
    new CSG.Path2D([[-11.33115,49.1996448],[2.6155758,50.4198252]]).appendPoint([1.3953954,64.366551]).appendPoint([-12.5513304,63.1463706]).appendPoint([-11.33115,49.1996448]).close().innerToCAG()
).union(
    new CSG.Path2D([[-9.6751909,30.2719455],[4.2715349,31.4921259]]).appendPoint([3.0513545,45.4388517]).appendPoint([-10.8953713,44.2186713]).appendPoint([-9.6751909,30.2719455]).close().innerToCAG()
).union(
    new CSG.Path2D([[-8.0192318,11.3442462],[5.927494,12.5644266]]).appendPoint([4.7073136,26.5111524]).appendPoint([-9.2394122,25.290972]).appendPoint([-8.0192318,11.3442462]).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.3632727,-7.5834531],[7.5834531,-6.3632727]]).appendPoint([6.3632727,7.5834531]).appendPoint([-7.5834531,6.3632727]).appendPoint([-6.3632727,-7.5834531]).close().innerToCAG()
).union(
    new CSG.Path2D([[89.6778592,31.572225],[103.5416122,29.6238016]]).appendPoint([105.4900356,43.4875546]).appendPoint([91.6262826,45.435978]).appendPoint([89.6778592,31.572225]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.0335703,12.7571317],[100.8973233,10.8087083]]).appendPoint([102.8457467,24.6724613]).appendPoint([88.9819937,26.6208847]).appendPoint([87.0335703,12.7571317]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.966437,69.2024116],[108.83019,67.2539882]]).appendPoint([110.7786134,81.1177412]).appendPoint([96.9148604,83.0661646]).appendPoint([94.966437,69.2024116]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.3221481,50.3873183],[106.1859011,48.4388949]]).appendPoint([108.1343245,62.3026479]).appendPoint([94.2705715,64.2510713]).appendPoint([92.3221481,50.3873183]).close().innerToCAG()
).union(
    new CSG.Path2D([[116.6238187,1.3826322],[129.0979101,-4.9732348]]).appendPoint([135.4537771,7.5008566]).appendPoint([122.9796857,13.8567236]).appendPoint([116.6238187,1.3826322]).close().innerToCAG()
).union(
    new CSG.Path2D([[116.9080645,-20.0863967],[129.3821559,-26.4422637]]).appendPoint([135.7380229,-13.9681723]).appendPoint([123.2639315,-7.6123053]).appendPoint([116.9080645,-20.0863967]).close().innerToCAG()
).union(
    new CSG.Path2D([[99.087934,-11.0065867],[111.5620254,-17.3624537]]).appendPoint([117.9178924,-4.8883623]).appendPoint([105.443801,1.4675047]).appendPoint([99.087934,-11.0065867]).close().innerToCAG()
)).extrude({ offset: [0, 0, 4] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = cutout_extrude_4_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        