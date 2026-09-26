/* tool-gold-dpoc · Elucenia · https://github.com/Elucenia/tool-gold-dpoc
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"gold-dpoc","title":"Classificação GOLD da DPOC","fields":[["rel","Relação VEF₁/CVF pós-broncodilatador","num",{"min":0.2,"max":1.2,"step":0.01,"ph":"0,62"}],["vef1","VEF₁ pós-broncodilatador","num",{"min":5,"max":150,"unit":"% do previsto","ph":"60"}],["mmrc","Dispneia (escala mMRC)","sel",{"opts":{"0":"0: só com exercício intenso","1":"1: ao andar rápido ou subir ladeira","2":"2: anda mais devagar que pessoas da mesma idade ou para ao andar no plano","3":"3: para após ~100 m ou poucos minutos no plano","4":"4: não sai de casa ou tem dispneia ao se vestir"}}],["exac","Exacerbações moderadas no último ano (corticoide e/ou antibiótico)","num",{"min":0,"max":20,"ph":"0"}],["intern","Exacerbações com internação no último ano","num",{"min":0,"max":10,"ph":"0"}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
