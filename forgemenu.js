/* @flow */
function createMenu() {
	var menucontainer = document.createElement('div');
	menucontainer.id = "FORGEmenuContainer";

	var mainmenu = document.createElement('ul');
	mainmenu.className = "FORGEmenu";

	var menuitem = document.createElement('li');

	var itemname = document.createElement('a');
	itemname.innerText = "My Forge";
	itemname.href = "#";

	var submenu = document.createElement('div');

	var submenuItem1name = document.createElement('a');
	submenuItem1name.innerText = "Redmine"
	submenuItem1name.href = "https://support.forgeservicelab.fi/redmine"

	var submenuItem2name = document.createElement('a');
	submenuItem2name.innerText = "GitLab"
	submenuItem2name.href = "https://git.forgeservicelab.fi"

	var submenuItem3name = document.createElement('a');
	submenuItem3name.innerText = "OpenStack"
	submenuItem3name.href = "https://cloud.forgeservicelab.fi"

	submenu.appendChild(submenuItem2name);
	submenu.appendChild(submenuItem3name);
	submenu.appendChild(submenuItem1name);

	menuitem.appendChild(itemname);
	menuitem.appendChild(submenu);

	var menuitem2 = document.createElement('li');
	var item2name = document.createElement('a');
	item2name.innerText = "Sign Out";
	item2name.href = "https://auth.forgeservicelab.fi/logout";
	menuitem2.appendChild(item2name);

	mainmenu.appendChild(menuitem);
	mainmenu.appendChild(menuitem2);
	menucontainer.appendChild(mainmenu);

	document.body.appendChild(menucontainer);

	$(document).ready(function() {
		$('.FORGEmenu li').hover(function() {
			$('div', this).slideDown('fast');
		}, function() {
			$('div', this).slideUp('fast');
		});
	});
}

function styleMenu() {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '#FORGEmenuContainer {\
		background: black;\
		position: fixed;\
		top: 0;\
		width: 100%;\
		z-index: 100;\
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAAB3RJTUUH3ggbDAc0NGfXtgAAC35JREFUWMOtmFuMXdV5x3/fWnuf+5mbx2N7PGY8xsTERCSFhpRLaCltQ+QKSCPyQJuQ0Ic2iaK2qoQUqe1TK/WuVpX6UNVJCS2R4tJEbpugmBACxKYJBtxwsQHf5+6ZM2fOde+z91pfH87MMOMZm0H0ezn7rLPWOv/9Xf7fRdiEPDWxSOrABmp/dbjPAbwwUx+baCejQ/ngN8/XO9qftfc4ZZdX5b2LAN1zCi+qyr9/arTvL0VEZTPHj881ZbwV2/uuGUiPztb/7EKj8yWgKBD6pevfEb1sRdft2Iw41ckH92wZueLJH03XuK4nZ4YLGV/ruO3PTC/+sVO+1Ew8oZGOEQkSp6ajHgWyRshagwId54lSxRghawUL+M3gv+y3jJFHgisBTJzKcCHjj881PvufFxa+YY3EAEYEICPAB/tzXFvKUs7YDe+Yj1LerEVMtBJUFQXMZSpRWYVP1mI3wkPrNPjN0/PkrQnv392f/NeFhecaqb8D1FsxppE4bhzIc11PjnJo1ygBQFURkTWetQI2TjlRaTHR7JALDF43Ut/ak1kr653jibOV8NNjA8mhs5WTiepeAzbxnqFchl/eUSIw3cvNe3ArVVAUI8JclHJ0tkE9dQSyka3X2nnl6dnpGq3Uyz0jffqts5WTXnWfAF7hlq1F9pSzqxwYrPC+5Phck7fr8bvuM8sP2/OhuWekT79zvvKcU90rQOqVu4bL7Clnl0wCH33iHK/MRe8LnAI3Dxb58ECBjtd1rrKGgM7WI8bKOQCemaw9PB11DgJ4hLt3lNmSsYgIRoRtXzuFN0I78Zz/7HX0ZgzBKltf7oNXWluxhFfeqsecqLS68FRANjDxT+YaJjTS+2Y1qii41Ku9c1uJXaV3zPr5Ixf517cWMYCKcNeOAt+/f4z/Dzk+1+RkLbrMJ5dM/PpCS24ZLPnJZucw4IxgR4rhGnBPX6jz6Ik5AqeIU4zzHHmryk9nWu8bnGrX3OXAvuNvqwG+Vo0MQD3xdyjYVur5xe09sBQgiVe+fOQi5YyB1CHOQeIo5S2//4PxK/rOppPcktJuGyoReb8e4ANjA+7w+YWjqnivcPtQ6R1eQ3m7EnFyqkHUcfg4oTNdBe9J4pSXp5s0Oo7U6zq/U69459FN5ubBXMDOQmbdy5p6Jx1pOneTNaKBgZFiZuVSK8JfHJ3sQu2kJDNVtJOQTC3gnKddi3ltrr3OdwTBJY40SmlM15l8eZypV8avCtCr8uGBwrr14IdT9VGDZBWlL7Tk7FpPePT4NEE2wF1ahCQBDEqKb0ZgDI//bI6PDZdQr4gRXvnOq0y8PE6nFpE0YwJrCTIGCxz4+5Gr1jNbsgGBCIqu0FpQDM0nm87TST0f2lZeYXJV8ChEKZo6tBmBNeATMIKvNGCwl4lKG4Az/3OBp/7uWYo9WYKMxSDYbIixghihMFjclKl3FkLON2MEIW8NwWyUDi8nmOF8uCbhXKjGIKALdUCRWhN1CqUcxCn0FKhEKc/91TO89tIEYS7Ae3CJIgGkrhsFPnUM7d/+LsHSdZMP9OR4sxaRs11NBr2h+UIt8WuS/7LkA9M1a5RAnCBRigjoYgsKWTTqkDl8gtcDZaEdE7UT0k6KRcDBDT83TJo6fJQyetvYihtcLcNsyQWsjrmgmSoCKwBlVfhvL2egnSKpI9+IUAHjwRshco6RNybYFke8OL9AYCwZawmsdD9FcM5jjFDYWiTfn9809WRXJfrAaRegXJaalr8HWUs4HZNLHLnEYYBaJqB3rknv9BytpE3HBIhLCVJPPrCUs5DJZUlTTxBatu3fjg3tuxC2rpBizhoS33U2s45mL6OMT39oEGl3KHQc+cSRSRy9cUL/zDwaNag6ZTFJaTml5Typ96ROyeYCksTTXGjzCw99dBOEvUGaEzBWzLpwX/1Wf3j3GFGUkO+kWKcEzlNqxLhGlcB7Wi6h4R2xd3S8B1GiJKWnJ4/3yiceuQvv/HvKLvHSfitcNMWg20e0Ur8ubTmFG0d6GNtaIucVk3qsF7QyS5q0cXGLKE2IfYpD8epwqWNLf4m07fjg3ddxzU3DCPqe8mG8FCULsXvSVDvp1wEWk3Q9ixshGxhu/fkRMqnHesVEbdrNeUhi1DtSdXjvcerJWrCmQ9k2GB1K2D8idC7V0DjdVGMnQL3jVhQ1Ws5IMJQLJy/FKU6VSscxEJp1fnjwkY8z9E8vMDJQIFq8hEs6BEbwkiNxdTrROTraxEtELpOlZzKg/2iBE/9yCDFCfudWyjfsZvRPP0/xI3vRJEXCYMO68XQjJmsEA8y008fs/V95JFZ4OBBD7DzXrCqzVt7Me/r6CvzkhQkas2cIMMTJNDPV7zJdfR6N5+ilwS7r2B/FONvhUq6OFALK2TKhNyRzi0z/zRO0X3qbvl//GCaX6dZaS8pYDpIfzzQwIt6D7ipm/trcuaPnvEdja8RNtVJS71lfgAhffOgm8lmDj+eZqHyDqeph2skMw8CNvs2eTp2tcZOatGhKkxBDw7S5GM5QZRGNE8LBHhrH3uBnY5+j8eyrayzlFeqJw6niVVOgfutQ+Q0zmAvGc9b8OPVqHMp0O11f8iyx/+MH76NW/w92B8p+4HbgA3iyS+apk+DEIwgN08IvPdfCGq2g3vUyIwS9Rc4e+CMaT728hlLeqkW4bg2aGS1mvrnSNP3azt6vLDPg0dnGFVvKPXu3MjO/QH+YxQDJqomBUQgxhGpQFEEI1CJLzXjHxt04UfBxgukpcPHBP8e3Y1DFeeV/K22MKIXAcOu28hePjC9ac6rakmJgX+/NmOcB54Hj880NAQZhQGmgj582qnz1y1+lABSzBfqCHD02S5EAg6GoBXp8t/D1OPqTfgbioW5vHFpwnuy+EfadfwyTz4IIP5iqUQotIHEg/OP3Li4El6LECcCxS3WTqO+dbqYVrzhV7IFdvRsWEADqPRhD581J/u23fo9TLx5HMkKuVCAnlryxlCTDAAW2+wGwEDjQWov87u1s+50DDP3Bb3TVYQ1n6jFHZ+uEYrxDza/s7Nlxrh7PVCKncq4esXup7XxyvPpwteMOLjcz9432kbPmXSksnqrw2p/8MxcPfpdsMU8QBARYrBHEK9KMKN6wmz1/+7uUbrsBkw1XAuNSnPDDqfrKf+wqZj53+7byY+sy20tzDXPTYMl/+1zlucjrrVawoRE+sbOXvDVXbcu885igq+3m6Una56YgdRgxZIb6KX3k2ne2O48s3TcbJRyZqBEawSmuFJpj917T//HT9chcW875NQCfnlyk7bwc2NWvj5+eO2lE9hnpWuFq5t6guVjbKEk3/C4vBi42Yp6/1MQuZQ0rcuqBsYHrj0wsSsaKLneW66x36Mx8+MCeLcnjp+dOisheAasK1/VmuXlLEafdIRCbnCIsr60eIP1ousZ4MyEwgoKzIm9/Zmzg+m+fq4Sf2j2QbDibWZZUSQ6dmQ8fvHbw+pyVY3TJ3r1Vi/nW2QpTrQS/CoheoS9eXl/GG3vPmXrMo2/PMRulBEYcQN7Ksc+MDVz/xNlKGDlNNsrPG8p/X1yQA7v69cnx6sO1xB1U7Q61FLAIOwoB+/vzDGSCq1p8sp3waqXFYuJIfZeQBZyAHcqFv/1Lwz1fe3K8KveM9OmVCogN5enJRfoy1tw0WPLPzlb7G7EeXkz8HYAGIt6pt22nWIHeMKAQmDXaqyeOeuIRtMsEgnOqIogph+b57cXMvTcPFBfeXGyb6Xbi71zyuU0DXC3HLtXNrVvLvpm6/d+fWPyHyPnbDZJdPUCXDUy8/GkAj8ZFa1+6d7T/tuWB1S2DJb+ZEuyqssyTp6ot2ddXUIC5KB15dqo22pOxn5yNkuG+jP1CM+0y/PJEohgYFhP39a25YLKV+O/dtaN8vpwJxg+drdgb+nJ+f39BV4/+riT/B7aX4HUXLMAyAAAAAElFTkSuQmCC");\
		background-repeat: no-repeat;\
		background-size: 20px;\
		background-position-x: 2px;\
		background-position-y: 50%;\
	}\
	.FORGEmenu {\
		position: relative;\
		float: right;\
		right: 10px;\
		margin: 0;\
		font-size: 13px;\
	}\
	.FORGEmenu a, a.hover, a.visited {\
		color: white;\
		text-decoration: none;\
	}\
	.FORGEmenu li {\
		-webkit-box-sizing: border-box;\
		-moz-box-sizing: border-box;\
		box-sizing: border-box;\
		padding: 5px 10px 5px 10px;\
		border-left: solid white 1px;\
		list-style: none;\
		width: 99px;\
		float: left;\
	}\
	.FORGEmenu li:last-child {\
		border-right: solid white 1px;\
	}\
	.FORGEmenu li a {\
		display: block;\
		text-align: center;\
	}\
	.FORGEmenu div {\
		-webkit-box-sizing: border-box;\
		-moz-box-sizing: border-box;\
		box-sizing: border-box;\
		display: none;\
		position: absolute;\
		background: black;\
		margin: 6px -10px 0px -10px;\
		width: 98px;\
		padding-left: 5px;\
	}\
	.FORGEmenu div a {\
		position: relative;\
		display: block;\
		margin: 0;\
		width: auto;\
		padding: 5px 10px;\
		whitespace: nowrap;\
		text-align: left;\
	}'

	document.getElementsByTagName('head')[0].appendChild(style);
}

(function () {
 
    function loadScript(url, callback) {
 
        var script = document.createElement("script")
        script.type = "text/javascript";
 
        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }
 
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
 
    loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
 
         //jQuery loaded
         createMenu();
 		 styleMenu();
    });
 
 
})();