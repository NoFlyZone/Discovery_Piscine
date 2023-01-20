var bottoneAle = $("#bottoneAle");
var prima = $("#main");
var homeButtonAle = $("#homeAle");
var paginaAle = $("#cvAle");
var paginaLapo = $("#cvLapo");
var bottoneLapo = $("#bottoneLapo");
var homeButtonLapo = $("#homeLapo");
var infoButtonAle = $("#infoAle");
var infoAle = $("#datiAle");
var experienceButtonAle = $("#experienceButtonAle");
var experienceAle = $("#esperienzeAle");
var contactButtonAle = $("#contactButtonAle");
var contactAle = $("#contattiAle");
var datiButtonLapo = $("#buttonDatiLapo");
var datiLapo = $("#datiLapo");
var esperienzeButtonLapo = $("#buttonExperienceLapo");
var esperienzeLapo = $("#esperienzeLapo");
var contactButtonLapo = $("#buttonContactLapo");
var contactLapo = $("#contattiLapo")

function changeImg(){
	var immagineOra = $("#foto1");
	if (immagineOra.attr('src').search("cina") > 0)
		immagineOra.attr('src', "imgs/ale.jpg");
	else
		immagineOra.attr('src', "imgs/cina.jpg");
}
setInterval(() => {
	changeImg();
}, 3000);

bottoneAle.on("click", hideMainShowAle);
homeButtonAle.on("click", hideAleShowMain);
bottoneLapo.on("click", hideMainShowLapo);
homeButtonLapo.on("click", hideLapoShowMain);
infoButtonAle.on("click", showInfoAle);
experienceButtonAle.on("click", showExpAle);
contactButtonAle.on("click", showContactAle);
datiButtonLapo.on("click", showInfoLapo);
esperienzeButtonLapo.on("click", showExpLapo);
contactButtonLapo.on("click", showContactLapo);
function hideMainShowAle(){
	prima.hide();
	paginaAle.css("display", "flex");
	infoButtonAle.css("color", "darkgray");
}
function hideMainShowLapo(){
	prima.hide();
	paginaLapo.css("display", "flex");
	datiButtonLapo.css("color", "darkgray");
	esperienzeButtonLapo.css("color", "");
	contactButtonLapo.css("color", "");
}
function hideAleShowMain(){
	paginaAle.hide();
	infoButtonAle.css("color", "");
	experienceButtonAle.css("color", "");
	contactButtonAle.css("color", "")
	prima.show()
}
function hideLapoShowMain(){
	paginaLapo.hide();
	prima.show();
	datiButtonLapo.css("color", "");
	esperienzeButtonLapo.css("color", "");
	contactButtonLapo.css("color", "");
}
function showInfoAle(){
	contactAle.hide();
	experienceAle.hide();
	infoAle.show();
	infoButtonAle.css("color", "darkgray");
	experienceButtonAle.css("color", "");
	contactButtonAle.css("color", "")
}
function showExpAle(){
	contactAle.hide();
	infoAle.hide();
	experienceAle.show();
	infoButtonAle.css("color", "");
	experienceButtonAle.css("color", "darkgray");
	contactButtonAle.css("color", "")
}
function showContactAle(){
	infoAle.hide();
	experienceAle.hide();
	contactAle.show();
	infoButtonAle.css("color", "");
	experienceButtonAle.css("color", "");
	contactButtonAle.css("color", "darkgray")
}
function showInfoLapo(){
	contactLapo.hide();
	esperienzeLapo.hide();
	datiLapo.show();
	datiButtonLapo.css("color", "darkgray");
	esperienzeButtonLapo.css("color", "");
	contactButtonLapo.css("color", "");
}
function showExpLapo(){
	contactLapo.hide();
	datiLapo.hide();
	esperienzeLapo.show();
	datiButtonLapo.css("color", "");
	esperienzeButtonLapo.css("color", "darkgray");
	contactButtonLapo.css("color", "");
}
function showContactLapo(){
	datiLapo.hide();
	esperienzeLapo.hide();
	contactLapo.show();
	datiButtonLapo.css("color", "");
	esperienzeButtonLapo.css("color", "");
	contactButtonLapo.css("color", "darkgray");
}

