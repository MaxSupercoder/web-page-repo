var ii = 1;
			
		    //JavaScript is Fun
			window.onload = function()
			{
			    //codeScrolling();
			}
			
		    function codeScrolling()
			{
			    var i = -1;
			    var helloImMax;
			    var timeIt = setInterval(function() {
				    i++;
				    helloImMax = text[i];
					document.getElementById("codeBackdrop").innerHTML += helloImMax;
					if(i === text.length - 1)
					{
						i = -1;
					}
				}, 1);
				
				var timeIt = setInterval(function() {
				    document.getElementById("codeBackdrop").innerHTML = "";
				}, 33000);
				
			}
			
			
			
			function scrn(i, ii)
			{
			    var color = document.getElementById(i.id).style.color;
				if(color === "white")
				{
				    document.getElementById("homeButton").style.color = "white";
					document.getElementById("aboutWebsite").style.display = "none";
					document.getElementById("settingsTab").style.display = "none";
					document.getElementById("settingsButton").style.color = "white";
					document.getElementById("portfolioButton").style.color = "white";
					document.getElementById("projectsButton").style.color = "white";
					document.getElementById("portfolio").style.display = "none";
					//document.write(i);
                    document.getElementById(i.id).style.color = "gray";
					document.getElementById(ii).style.display = "block";
				}
			}
			
			function Background()
			{ 
			    const b = [
			        "https://alphagypsumboard.com/wp-content/uploads/2019/07/Background-website-01-1024x687.jpg",
			        "https://media.tenor.com/mGKQa3avS8AAAAAd/website-background.gif",
			        "https://images.saymedia-content.com/.image/t_share/MTk0NTIwMDQ4MzU2ODI4Nzgy/how-to-create-cool-website-backgrounds-the-ultimate-guide.gif",
			        "https://camo.githubusercontent.com/c89fa1342a04414459ee9f14c4db3ddcdc5ca8cda757252bb33c5cb71aa09aa0/68747470733a2f2f74697073792e6769746875622e696f2f627562626c792d62672f627562626c792e676966",
			        "https://media.giphy.com/media/xT9IgyaftFIcZNphcI/giphy.gif",
					"https://media4.giphy.com/media/yk9kkQMOnrXeCT2vrx/giphy.gif",
					"https://media.istockphoto.com/id/1491420634/vector/light-light-color-wave-streamline-abstract-background-material_beautiful-light-blue.jpg?s=612x612&w=0&k=20&c=h4ZzRNu-wPw_Yv6LaSXz07arJ06hA9o0mcWNSsAOxUs=",
					"",
					"https://t3.ftcdn.net/jpg/02/39/98/48/360_F_239984893_m8NmN3aTbmBwWgMfN0VqCl5gaQxoAP6n.jpg"
				];
				
			    document.getElementById("codeBackdrop").src = b[ii];
				if(ii === 8)
				{
				    ii = 0;
				} else {
				    ii++;
				}
			};