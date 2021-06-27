const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express();

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))


app.get("/", function(req,res){
    res.render("home")
})

app.get("/bio-cs", function(req,res){
    res.render("bio-cs")
});

app.get("/arts", function(req,res){
    res.render("arts")
})

app.get("/pure-science",function(req,res){
    res.render("pure-science")
})

app.post('/', function(req,res){

    // 10th Marks
    const tenMark1 = req.body.tenMark1;
    const tenMark2 = req.body.tenMark2;
    const tenMark3 = req.body.tenMark3;

    // 11th Marks
    const eleTamil = req.body.eleventhTamil;
    const eleEnglish = req.body.eleventhEnglish;
    const eleMaths = req.body.eleventhMaths;
    const elePhysics = req.body.eleventhPhysics;
    const eleChemistry = req.body.eleventhChemistry;
    const eleCsBio = req.body.eleventhCsBio;


    // 12th Marks
    const tweTamil = req.body.twelthTamil;
    const tweEnglish = req.body.twelthEnglish;
    const tweMaths = req.body.twelthMaths;
    const twePhysics = req.body.twelthPhysics;
    const tweChemistry = req.body.twelthChemistry;
    const tweCsBio = req.body.twelthCsBio;
    
    
    

    // 10th Marks Calculator
    const tenTotal = parseInt(tenMark1) + parseInt(tenMark2) + parseInt(tenMark3);
    const tenPer = tenTotal/3
    const tenAvg = String(Math.round(tenPer * 50/100))
    
    // 11th Marks Calculator
    const eleTamilper = parseInt(eleTamil-10)
    const eleTamilAvg = Math.round(eleTamilper / 90 * 20)
    const eleEnglishper = parseInt(eleEnglish-10)
    const eleEnglishAvg = Math.round(eleEnglishper / 90 * 20)
    const eleMathsper = parseInt(eleMaths-10)
    const eleMathsAvg = Math.round(eleMathsper / 90 * 20)
    const elePhysicsper = parseInt(elePhysics-30)
    const elePhysicsAvg = Math.round(elePhysicsper / 70 * 20)
    const eleChemistryper = parseInt(eleChemistry-30)
    const eleChemistryAvg = Math.round(eleChemistryper / 70 * 20)
    const eleCsBioper = parseInt(eleCsBio-30)
    const eleCsBioAvg = Math.round(eleCsBioper / 70 * 20)


    // 12th Marks Calculator
    const tweTamilAvg = parseInt(tweTamil / 10 * 30)
    const tweEnglishAvg = parseInt(tweEnglish / 10 * 30)
    const tweMathsAvg = parseInt(tweMaths / 10 * 30)
    const twePhysicsAvg = parseInt(twePhysics / 30 * 30)
    const tweChemistryAvg = parseInt(tweChemistry / 30 * 30)
    const tweCsBioAvg = parseInt(tweCsBio / 30 * 30)

    

    // 12th Total
    const Tamil = Math.round(parseInt(tenAvg) + parseInt(eleTamilAvg) + parseInt(tweTamilAvg))
    const English = Math.round(parseInt(tenAvg) + parseInt(eleEnglishAvg) + parseInt(tweEnglishAvg))
    const Maths = Math.round(parseInt(tenAvg) + parseInt(eleMathsAvg) + parseInt(tweMathsAvg))
    const Physics = Math.round(parseInt(tenAvg) + parseInt(elePhysicsAvg) + parseInt(twePhysicsAvg))
    const Chemistry = Math.round(parseInt(tenAvg) + parseInt(eleChemistryAvg) + parseInt(tweChemistryAvg))
    const CsBio = Math.round(parseInt(tenAvg) + parseInt(eleCsBioAvg) + parseInt(tweCsBioAvg))

    const Total = parseInt(Tamil) + parseInt(English) + parseInt(Maths) + parseInt(Physics) + parseInt(Chemistry) + parseInt(CsBio)

    res.render("results", {
        tenMark:  tenAvg, eleTamil: eleTamilAvg, tweTamil:tweTamilAvg, tTamil: Tamil,
        tenMark:  tenAvg, eleEnglish: eleEnglishAvg, tweEnglish:tweEnglishAvg, tEnglish: English,
        tenMark:  tenAvg, eleMaths: eleMathsAvg, tweMaths:tweMathsAvg, tMaths: Maths,
        tenMark:  tenAvg, elePhysics: elePhysicsAvg, twePhysics:twePhysicsAvg, tPhysics: Physics,
        tenMark:  tenAvg, eleChemistry: eleChemistryAvg, tweChemistry:tweChemistryAvg, tChemistry: Chemistry,
        tenMark:  tenAvg, eleCsBio: eleCsBioAvg, tweCsBio:tweCsBioAvg, tCsBio: CsBio,
        Total:Total
    });

})

app.post('/arts',function(req,res){
    // 10th Marks
    const tenMark1 = req.body.tenMark1;
    const tenMark2 = req.body.tenMark2;
    const tenMark3 = req.body.tenMark3;

    // 11th Marks
    const eleTamil = req.body.eleventhTamil;
    const eleEnglish = req.body.eleventhEnglish;
    const eleCommerce = req.body.eleventhCommerce;
    const eleAccontancy = req.body.eleventhAccontancy;
    const eleEconomics = req.body.eleventhEconomics;
    const eleCa = req.body.eleventhCA;

    // 12th Marks
    const tweTamil = req.body.twelthTamil;
    const tweEnglish = req.body.twelthEnglish;
    const tweCommerce = req.body.twelthCommerce;
    const tweAccontancy = req.body.twelthAccontancy;
    const tweEconomics = req.body.twelthEconomics;
    const tweCa = req.body.twelthCA;
    
    

    // 10th Marks Calculator
    const tenTotal = parseInt(tenMark1) + parseInt(tenMark2) + parseInt(tenMark3);
    const tenPer = tenTotal/3
    const tenAvg = String(Math.round(tenPer * 50/100))
    
    // 11th Marks Calculator
    const eleTamilper = parseInt(eleTamil-10)
    const eleTamilAvg = Math.round(eleTamilper / 90 * 20)
    const eleEnglishper = parseInt(eleEnglish-10)
    const eleEnglishAvg = Math.round(eleEnglishper / 90 * 20)
    const eleCommerceper = parseInt(eleCommerce-10)
    const eleCommerceAvg = Math.round(eleCommerceper / 90 * 20)
    const eleAccontancyper = parseInt(eleAccontancy-10)
    const eleAccontancyAvg = Math.round(eleAccontancyper / 90 * 20)
    const eleEconomicsper = parseInt(eleEconomics-10)
    const eleEconomicsAvg = Math.round(eleEconomicsper / 90 * 20)
    const eleCaper = parseInt(eleCa-30)
    const eleCaAvg = Math.round(eleCaper / 70 * 20)

    // 12th Marks Calculator
    const tweTamilAvg = parseInt(tweTamil / 10 * 30)
    const tweEnglishAvg = parseInt(tweEnglish / 10 * 30)
    const tweCommerceAvg = parseInt(tweCommerce / 10 * 30)
    const tweAccontancyAvg = parseInt(tweAccontancy / 10 * 30)
    const tweEconomicsAvg = parseInt(tweEconomics / 10 * 30)
    const tweCaAvg = parseInt(tweCa / 30 * 30)
    

    // 12th Total
    const Tamil = Math.round(parseInt(tenAvg) + parseInt(eleTamilAvg) + parseInt(tweTamilAvg))
    const English = Math.round(parseInt(tenAvg) + parseInt(eleEnglishAvg) + parseInt(tweEnglishAvg))
    const Commerce = Math.round(parseInt(tenAvg) + parseInt(eleCommerceAvg) + parseInt(tweCommerceAvg))
    const Accontancy = Math.round(parseInt(tenAvg) + parseInt(eleAccontancyAvg) + parseInt(tweAccontancyAvg))
    const Economics = Math.round(parseInt(tenAvg) + parseInt(eleEconomicsAvg) + parseInt(tweEconomicsAvg))
    const Ca = Math.round(parseInt(tenAvg) + parseInt(eleCaAvg) + parseInt(tweCaAvg))

    const Total = parseInt(Tamil) + parseInt(English) + parseInt(Commerce) + parseInt(Accontancy) + parseInt(Economics) + parseInt(Ca)
    res.render('arts-result', {
        tenMark:  tenAvg, eleTamil: eleTamilAvg, tweTamil:tweTamilAvg, tTamil: Tamil,
        tenMark:  tenAvg, eleEnglish: eleEnglishAvg, tweEnglish:tweEnglishAvg, tEnglish: English,
        tenMark:  tenAvg, eleCommerce: eleCommerceAvg, tweCommerce:tweCommerceAvg, tCommerce: Commerce,
        tenMark:  tenAvg, eleCa: eleCaAvg, tweCa:tweCaAvg, tCa: Ca,
        tenMark:  tenAvg, eleAccontancy: eleAccontancyAvg, tweAccontancy:tweAccontancyAvg, tAccontancy: Accontancy,
        tenMark:  tenAvg, eleEconomics: eleEconomicsAvg, tweEconomics:tweEconomicsAvg, tEconomics: Economics,
        Total:Total
    })
})

app.post('/pure-science', function(req,res){
    
    // 10th Marks
    const tenMark1 = req.body.tenMark1;
    const tenMark2 = req.body.tenMark2;
    const tenMark3 = req.body.tenMark3;

    // 11th Marks
    const eleTamil = req.body.eleventhTamil;
    const eleEnglish = req.body.eleventhEnglish;
    const eleMaths = req.body.eleventhMaths;
    const elePhysics = req.body.eleventhPhysics;
    const eleChemistry = req.body.eleventhChemistry;
    const eleBotany = req.body.eleventhBotany;
    const eleZoology = req.body.eleventhZoology;

    // 12th Marks
    const tweTamil = req.body.twelthTamil;
    const tweEnglish = req.body.twelthEnglish;
    const twePhysics = req.body.twelthPhysics;
    const tweChemistry = req.body.twelthChemistry;
    const tweBotany = req.body.twelthBotany;
    const tweZoology = req.body.twelthZoology;    
    

    // 10th Marks Calculator
    const tenTotal = parseInt(tenMark1) + parseInt(tenMark2) + parseInt(tenMark3);
    const tenPer = tenTotal/3
    const tenAvg = String(Math.round(tenPer * 50/100))
    
    // 11th Marks Calculator
    const eleTamilper = parseInt(eleTamil-10)
    const eleTamilAvg = Math.round(eleTamilper / 90 * 20)
    const eleEnglishper = parseInt(eleEnglish-10)
    const eleEnglishAvg = Math.round(eleEnglishper / 90 * 20)
    const elePhysicsper = parseInt(elePhysics-30)
    const elePhysicsAvg = Math.round(elePhysicsper / 70 * 20)
    const eleChemistryper = parseInt(eleChemistry-30)
    const eleChemistryAvg = Math.round(eleChemistryper / 70 * 20)
    const eleBotanyper = parseInt(eleBotany-30)
    const eleBotanyAvg = Math.round(eleBotanyper / 70 * 20)
    const eleZoologyper = parseInt(eleZoology-30)
    const eleZoologyAvg = Math.round(eleZoologyper / 70 * 20)

    // 12th Marks Calculator
    const tweTamilAvg = parseInt(tweTamil / 10 * 30)
    const tweEnglishAvg = parseInt(tweEnglish / 10 * 30)
    const twePhysicsAvg = parseInt(twePhysics / 30 * 30)
    const tweChemistryAvg = parseInt(tweChemistry / 30 * 30)
    const tweBotanyAvg = parseInt(tweBotany / 30 * 30)
    const tweZoologyAvg = parseInt(tweZoology / 30 * 30)
    

    // 12th Total
    const Tamil = Math.round(parseInt(tenAvg) + parseInt(eleTamilAvg) + parseInt(tweTamilAvg))
    const English = Math.round(parseInt(tenAvg) + parseInt(eleEnglishAvg) + parseInt(tweEnglishAvg))
    const Physics = Math.round(parseInt(tenAvg) + parseInt(elePhysicsAvg) + parseInt(twePhysicsAvg))
    const Chemistry = Math.round(parseInt(tenAvg) + parseInt(eleChemistryAvg) + parseInt(tweChemistryAvg))
    const Botany = Math.round(parseInt(tenAvg) + parseInt(eleBotanyAvg) + parseInt(tweBotanyAvg))
    const Zoology = Math.round(parseInt(tenAvg) + parseInt(eleZoologyAvg) + parseInt(tweZoologyAvg))

    const Total = parseInt(Tamil) + parseInt(English) + parseInt(Botany) + parseInt(Physics) + parseInt(Chemistry) + parseInt(Zoology)

    res.render("pure-science-results", {
        tenMark:  tenAvg, eleTamil: eleTamilAvg, tweTamil:tweTamilAvg, tTamil: Tamil,
        tenMark:  tenAvg, eleEnglish: eleEnglishAvg, tweEnglish:tweEnglishAvg, tEnglish: English,
        tenMark:  tenAvg, eleBotany: eleBotanyAvg, tweBotany:tweBotanyAvg, tBotany: Botany,
        tenMark:  tenAvg, elePhysics: elePhysicsAvg, twePhysics:twePhysicsAvg, tPhysics: Physics,
        tenMark:  tenAvg, eleChemistry: eleChemistryAvg, tweChemistry:tweChemistryAvg, tChemistry: Chemistry,
        tenMark:  tenAvg, eleZoology: eleZoologyAvg, tweZoology:tweZoologyAvg, tZoology: Zoology,
        Total:Total
    });
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is started at port: 3000");
})