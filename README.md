# BMC UI Exercise

##Folders & Files
firebase.json<br/>
index.html<br/>
app<br/>
     --app.js<br/>
css<br/>
  --bootstrap.min.css<br/>
  --styles.css<br/>
 data<br/>
  --userDetails.json<br/>
 templates<br/>
   --templateurl.html<br/>
   
##Technology stack
 <ul>
 <li>HTML5</li>
 <li>CSS3</li>
 <li>AngularJS</li>
 </ul>
 
##Third party libraries used:
 <ul>
 <li>AngularJS</li>
 <li>Bootstrap</li>
 <li>AngularFire</li>
 <li>Firebase</li>
 </ul>
 
##How to run the application
 The application should run on a localhost. Running the index.html will start the application.
 
##Features included:
 <ul>
 <li>Works across major browsers IE9, Chrome, Safari, FireFox</li>
 <li>Save button will enabled only after all the required fields are filled out</li>
 <li>Affected users field is implemented as a custom directive. It includes type-ahead after 3 characters. The data for the typeahead directive is populated from JSON file through REST call.</li>
 <li>Calculated priority will be dynamically displayed</li>
 <li>On completion of successfully saving data, the user will be notified of the delay using a spinner and a notification alert.</li>
 <li>Only the form is scrollable</li>
 </ul>
 
##Features not included:
<ul>
<li>Full keyboard support (Working on resolving issues related to keydown directive and scope.$apply()).</li>
</ul>

##Few data samples to test typeahead directive
<ul>
<li>alle - Allen Allbrook, Allexis Border, Allen Parker</li>
<li>jack - Jack Sparrow, Jack Niel, Jack Pharrel</li>
<li>mart - Martin Wheeler, Martin Sparrow</li>
</ul>

##References
<ul>
<li>https://www.sitepoint.com/creating-a-typeahead-widget-with-angularjs/</li>
<li>https://www.google.com/search?q=profile+pic+avatar&espv=2&biw=1920&bih=1006&source=lnms&tbm=isch&sa=X&ved=0ahUKEwimhIPW1YbSAhVCxFQKHeV-ADcQ_AUIBigB&dpr=1#q=profile+pic+avatar&tbm=isch&tbs=rimg:CVwoDghZxmfIIjitKJ-Jh_1D_12ggpm6oVNqKETYVne3yjiBNeCWi7ckNDRGtp8i-jMuf9LLhpY_1r-iDnf7XEimYLtFioSCa0on4mH8P_1aEfKERwHZ16NOKhIJCCmbqhU2ooQRgDLrl0EbCy0qEglNhWd7fKOIExGkhxkjAE5phCoSCV4JaLtyQ0NEEbA-cfdxA28aKhIJa2nyL6My5_10Rug6ys9keF2AqEgksuGlj-v6IORFwY56Ofd0TsioSCd_1tcSKZgu0WEbhZvHdulPfL&imgrc=_</li>
<li>http://stackoverflow.com/questions/15930339/how-to-tie-angular-uis-typeahead-with-a-server-via-http-for-server-side-optimi</li>
<li>https://www.sitepoint.com/understanding-angulars-apply-digest/</li>
<li>https://codepen.io/TheLarkInn/post/angularjs-directive-labs-ngenterkey</li>
<li>https://docs.angularjs.org/api/ng/directive/ngKeydown</li>
<li>https://github.com/connor11528/angularFire-todo/blob/master/app.js</li>
</ul>
 
 
 
 
   
   
   
