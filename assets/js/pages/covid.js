function covidTodosEstados(){
        $.ajax({
            'url': 'https://covid19-brazil-api.now.sh/api/report/v1',
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if ( 1 === 1 ){

                    // Estados

                    document.getElementById('estado1').value = data.data[0].uf;
                    document.getElementById('estado2').value = data.data[1].uf;
                    document.getElementById('estado3').value = data.data[2].uf;
                    document.getElementById('estado4').value = data.data[3].uf;
                    document.getElementById('estado5').value = data.data[4].uf;
                    document.getElementById('estado6').value = data.data[5].uf;
                    document.getElementById('estado7').value = data.data[6].uf;
                    document.getElementById('estado8').value = data.data[7].uf;
                    document.getElementById('estado9').value = data.data[8].uf;
                    document.getElementById('estado10').value = data.data[9].uf;
                    document.getElementById('estado11').value = data.data[10].uf;
                    document.getElementById('estado12').value = data.data[11].uf;
                    document.getElementById('estado13').value = data.data[12].uf;
                    document.getElementById('estado14').value = data.data[13].uf;
                    document.getElementById('estado15').value = data.data[14].uf;
                    document.getElementById('estado16').value = data.data[15].uf;
                    document.getElementById('estado17').value = data.data[16].uf;
                    document.getElementById('estado18').value = data.data[17].uf;
                    document.getElementById('estado19').value = data.data[18].uf;
                    document.getElementById('estado20').value = data.data[19].uf;
                    document.getElementById('estado21').value = data.data[20].uf;
                    document.getElementById('estado22').value = data.data[21].uf;
                    document.getElementById('estado23').value = data.data[22].uf;
                    document.getElementById('estado24').value = data.data[23].uf;
                    document.getElementById('estado25').value = data.data[24].uf;
                    document.getElementById('estado26').value = data.data[25].uf;
                    document.getElementById('estado27').value = data.data[26].uf;



                    // Casos

                    document.getElementById('cases1').value = data.data[0].cases;
                    document.getElementById('cases2').value = data.data[1].cases;
                    document.getElementById('cases3').value = data.data[2].cases;
                    document.getElementById('cases4').value = data.data[3].cases;
                    document.getElementById('cases5').value = data.data[4].cases;
                    document.getElementById('cases6').value = data.data[5].cases;
                    document.getElementById('cases7').value = data.data[6].cases;
                    document.getElementById('cases8').value = data.data[7].cases;
                    document.getElementById('cases9').value = data.data[8].cases;
                    document.getElementById('cases10').value = data.data[9].cases;
                    document.getElementById('cases11').value = data.data[10].cases;
                    document.getElementById('cases12').value = data.data[11].cases;
                    document.getElementById('cases13').value = data.data[12].cases;
                    document.getElementById('cases14').value = data.data[13].cases;
                    document.getElementById('cases15').value = data.data[14].cases;
                    document.getElementById('cases16').value = data.data[15].cases;
                    document.getElementById('cases17').value = data.data[16].cases;
                    document.getElementById('cases18').value = data.data[17].cases;
                    document.getElementById('cases19').value = data.data[18].cases;
                    document.getElementById('cases20').value = data.data[19].cases;
                    document.getElementById('cases21').value = data.data[20].cases;
                    document.getElementById('cases22').value = data.data[21].cases;
                    document.getElementById('cases23').value = data.data[22].cases;
                    document.getElementById('cases24').value = data.data[23].cases;
                    document.getElementById('cases25').value = data.data[24].cases;
                    document.getElementById('cases26').value = data.data[25].cases;
                    document.getElementById('cases27').value = data.data[26].cases;



                    // Mortes

                    document.getElementById('mortes1').value = data.data[0].deaths;
                    document.getElementById('mortes2').value = data.data[1].deaths;
                    document.getElementById('mortes3').value = data.data[2].deaths;
                    document.getElementById('mortes4').value = data.data[3].deaths;
                    document.getElementById('mortes5').value = data.data[4].deaths;
                    document.getElementById('mortes6').value = data.data[5].deaths;
                    document.getElementById('mortes7').value = data.data[6].deaths;
                    document.getElementById('mortes8').value = data.data[7].deaths;
                    document.getElementById('mortes9').value = data.data[8].deaths;
                    document.getElementById('mortes10').value = data.data[9].deaths;
                    document.getElementById('mortes11').value = data.data[10].deaths;
                    document.getElementById('mortes12').value = data.data[11].deaths;
                    document.getElementById('mortes13').value = data.data[12].deaths;
                    document.getElementById('mortes14').value = data.data[13].deaths;
                    document.getElementById('mortes15').value = data.data[14].deaths;
                    document.getElementById('mortes16').value = data.data[15].deaths;
                    document.getElementById('mortes17').value = data.data[16].deaths;
                    document.getElementById('mortes18').value = data.data[17].deaths;
                    document.getElementById('mortes19').value = data.data[18].deaths;
                    document.getElementById('mortes20').value = data.data[19].deaths;
                    document.getElementById('mortes21').value = data.data[20].deaths;
                    document.getElementById('mortes22').value = data.data[21].deaths;
                    document.getElementById('mortes23').value = data.data[22].deaths;
                    document.getElementById('mortes24').value = data.data[23].deaths;
                    document.getElementById('mortes25').value = data.data[24].deaths;
                    document.getElementById('mortes26').value = data.data[25].deaths;
                    document.getElementById('mortes27').value = data.data[26].deaths;

                    // Suspeitos

                    document.getElementById('susp1').value = data.data[0].suspects;
                    document.getElementById('susp2').value = data.data[1].suspects;
                    document.getElementById('susp3').value = data.data[2].suspects;
                    document.getElementById('susp4').value = data.data[3].suspects;
                    document.getElementById('susp5').value = data.data[4].suspects;
                    document.getElementById('susp6').value = data.data[5].suspects;
                    document.getElementById('susp7').value = data.data[6].suspects;
                    document.getElementById('susp8').value = data.data[7].suspects;
                    document.getElementById('susp9').value = data.data[8].suspects;
                    document.getElementById('susp10').value = data.data[9].suspects;
                    document.getElementById('susp11').value = data.data[10].suspects;
                    document.getElementById('susp12').value = data.data[11].suspects;
                    document.getElementById('susp13').value = data.data[12].suspects;
                    document.getElementById('susp14').value = data.data[13].suspects;
                    document.getElementById('susp15').value = data.data[14].suspects;
                    document.getElementById('susp16').value = data.data[15].suspects;
                    document.getElementById('susp17').value = data.data[16].suspects;
                    document.getElementById('susp18').value = data.data[17].suspects;
                    document.getElementById('susp19').value = data.data[18].suspects;
                    document.getElementById('susp20').value = data.data[19].suspects;
                    document.getElementById('susp21').value = data.data[20].suspects;
                    document.getElementById('susp22').value = data.data[21].suspects;
                    document.getElementById('susp23').value = data.data[22].suspects;
                    document.getElementById('susp24').value = data.data[23].suspects;
                    document.getElementById('susp25').value = data.data[24].suspects;
                    document.getElementById('susp26').value = data.data[25].suspects;
                    document.getElementById('susp27').value = data.data[26].suspects;

                } else{
                    
                }
                //console.log(data.data);
        }
    })

        
}

function covidBrasil(){
        $.ajax({
            'url': 'https://covid19-brazil-api.now.sh/api/report/v1/brazil',
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if ( 1 === 1 ){

                    document.getElementById('confirmados').value = data.data.confirmed;
                    document.getElementById('casos').value = data.data.cases;
                    document.getElementById('recuperados').value = data.data.recovered;
                    document.getElementById('mortes').value = data.data.deaths; 

                } else{
                    
                }
                //console.log(data.data);
        }
    })

        
}

function covidChina(){
        $.ajax({
            'url': 'https://covid19-brazil-api.now.sh/api/report/v1/china',
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if ( 1 === 1 ){

                    document.getElementById('confirmados1').value = data.data.confirmed;
                    document.getElementById('casos1').value = data.data.cases;
                    document.getElementById('recuperados1').value = data.data.recovered;
                    document.getElementById('morteschina').value = data.data.deaths; 

                } else{
                    
                }
                //console.log(data.data);
        }
    })

        
}

function consultaEstados(es){
        $.ajax({
            'url': 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/'+es,
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if (1 == 1){
                    document.getElementById('estadoc').value = data.state;
                    document.getElementById('casosc').value = data.cases;
                    document.getElementById('mortosc').value = data.deaths;
                    document.getElementById('suspeitosc').value = data.suspects;
                
                } else{
                    document.getElementById('estadoc').value = data.state;
                    document.getElementById('casosc').value = data.cases;
                    document.getElementById('mortosc').value = data.deaths;
                    document.getElementById('suspeitosc').value = data.suspects;
                }
                //console.log(data);
        }
    })
}

function consultaEstados(es){
        $.ajax({
            'url': 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/'+es,
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if (1 == 1){
                    document.getElementById('estadoc').value = data.state;
                    document.getElementById('casosc').value = data.cases;
                    document.getElementById('mortosc').value = data.deaths;
                    document.getElementById('suspeitosc').value = data.suspects;
                
                } else{
                    document.getElementById('estadoc').value = data.state;
                    document.getElementById('casosc').value = data.cases;
                    document.getElementById('mortosc').value = data.deaths;
                    document.getElementById('suspeitosc').value = data.suspects;
                }
                //console.log(data);
        }
    })
}

function consultaPaises(es){
        $.ajax({
            'url': 'https://covid19-brazil-api.now.sh/api/report/v1/'+es,
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if (1 == 1){
                    document.getElementById('casosp').value = data.data.cases;
                    document.getElementById('confirmadosp').value = data.data.confirmed;
                    document.getElementById('mortosp').value = data.data.deaths;
                    document.getElementById('recuperadosp').value = data.data.recovered;
                
                } else{
                    document.getElementById('casosp').value = data.data.cases;
                    document.getElementById('confirmadosp').value = data.data.confirmed;
                    document.getElementById('mortosp').value = data.data.deaths;
                    document.getElementById('recuperadosp').value = data.data.recovered;
                }
                //console.log(data);
        }
    })
}