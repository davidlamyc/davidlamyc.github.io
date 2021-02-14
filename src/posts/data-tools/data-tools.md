---
title: "Data Analysis Tool Shootout"
description: "In Excel, Python and R"
date: "2021-02-14"
---

Let's perform a mini data analysis tool shoot-out, specifically to perform multiple regression. Excel vs Python vs R.

Truth be told, I've just started on my R journey (I've used both Excel and Python for quite some time), and I thought it would be interesting to do a simple exercise were I could use all the tools at my disposal on the same data set. 

Here's a quick summary of the dataset of college basketball teams' performance in the United States across four years from [kaggle](https://www.kaggle.com/andrewsundberg/college-basketball-dataset), and the variables we will concern ourselves with. Let's pretend we are modeling the factors on the court that relate to a team's winning percentage.

```
Dependent variable:
W_PER - Percentage of games won out of all games played

Independent variables:
ADJOE - Adjusted Offensive Efficiency (An estimate of the offensive efficiency (points scored per 100 possessions) a team
ADJDE - Adjusted Defensive Efficiency (An estimate of the defensive efficiency (points allowed per 100 possessions) a team
EFG_O - Effective Field Goal Percentage Shot
EFG_D - Effective Field Goal Percentage Allowed
```

I won't go into the analysis of the results, as this is a quick survey of the tools themselves.

## Excel

Let's start with Excel. No code here, so here's what I did.

1. Open the csv file in Microsoft Excel.
2. Chose `Data Analysis` under the `Data` tab, then selected `Regression` from the options provided.
3. Selected the cell ranges for both the dependent and independent columns.
4. Voila!

```
SUMMARY OUTPUT								
								
Regression Statistics								
Multiple R        0.843510087							
R Square          0.711509267							
Adjusted R Square	0.710850612							
Standard Error	  0.095941213							
Observations	    1757							
								
ANOVA								
df	SS	MS	F	Significance F			
Regression	4	39.77344423	9.943361058	1080.246341	0			
Residual	1752	16.12666289	0.009204716					
Total	1756	55.90010712						
								
Coefficients	Standard Error	t Stat	P-value	Lower 95%	Upper 95%	Lower 95.0%	Upper 95.0%
Intercept	0.37890688	0.071737092	5.281882329	1.43832E-07	0.238207562	0.519606198	0.238207562	0.519606198
ADJOE	0.005448706	0.000558075	9.763384869	5.80165E-22	0.004354142	0.00654327	0.004354142	0.00654327
ADJDE	-0.005628197	0.000669195	-8.410396349	8.35282E-17	-0.006940702	-0.004315692	-0.006940702	-0.004315692
EFG_O	0.022003087	0.001123034	19.5925424	1.90733E-77	0.01980046	0.024205715	0.01980046	0.024205715
EFG_D	-0.018833761	0.001331731	-14.14231828	4.43852E-43	-0.02144571	-0.016221812	-0.02144571	-0.016221812
```

Ol' reliable Excel never fails. This is a small data set, we'll need more heavy-duty tools once our records go into the tens of thousands. On to python.

## Python

Let's import the packages we need, just the usual suspects.

```python
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm
import seaborn as sns
sns.set()
```

Then, we grab our data from the csv file, and look at the data.

```python
data = pd.read_csv('cbb.csv')
data
```

Now, we perform the regression itself.

```python
y = data['W_PER']
data[['ADJOE', 'ADJDE', 'EFG_O', 'EFG_D']]

x = sm.add_constant(x1)
results = sm.OLS(y,x).fit()

results.summary()
```

<table class="simpletable">
<caption>OLS Regression Results</caption>
<tr>
  <th>Dep. Variable:</th>          <td>W_PER</td>      <th>  R-squared:         </th> <td>   0.712</td>
</tr>
<tr>
  <th>Model:</th>                   <td>OLS</td>       <th>  Adj. R-squared:    </th> <td>   0.711</td>
</tr>
<tr>
  <th>Method:</th>             <td>Least Squares</td>  <th>  F-statistic:       </th> <td>   1080.</td>
</tr>
<tr>
  <th>Date:</th>             <td>Sun, 14 Feb 2021</td> <th>  Prob (F-statistic):</th>  <td>  0.00</td> 
</tr>
<tr>
  <th>Time:</th>                 <td>18:34:06</td>     <th>  Log-Likelihood:    </th> <td>  1627.9</td>
</tr>
<tr>
  <th>No. Observations:</th>      <td>  1757</td>      <th>  AIC:               </th> <td>  -3246.</td>
</tr>
<tr>
  <th>Df Residuals:</th>          <td>  1752</td>      <th>  BIC:               </th> <td>  -3218.</td>
</tr>
<tr>
  <th>Df Model:</th>              <td>     4</td>      <th>                     </th>     <td> </td>   
</tr>
<tr>
  <th>Covariance Type:</th>      <td>nonrobust</td>    <th>                     </th>     <td> </td>   
</tr>
</table>
<table class="simpletable">
<tr>
    <td></td>       <th>coef</th>     <th>std err</th>      <th>t</th>      <th>P>|t|</th>  <th>[0.025</th>    <th>0.975]</th>  
</tr>
<tr>
  <th>const</th> <td>    0.3789</td> <td>    0.072</td> <td>    5.282</td> <td> 0.000</td> <td>    0.238</td> <td>    0.520</td>
</tr>
<tr>
  <th>ADJOE</th> <td>    0.0054</td> <td>    0.001</td> <td>    9.763</td> <td> 0.000</td> <td>    0.004</td> <td>    0.007</td>
</tr>
<tr>
  <th>ADJDE</th> <td>   -0.0056</td> <td>    0.001</td> <td>   -8.410</td> <td> 0.000</td> <td>   -0.007</td> <td>   -0.004</td>
</tr>
<tr>
  <th>EFG_O</th> <td>    0.0220</td> <td>    0.001</td> <td>   19.593</td> <td> 0.000</td> <td>    0.020</td> <td>    0.024</td>
</tr>
<tr>
  <th>EFG_D</th> <td>   -0.0188</td> <td>    0.001</td> <td>  -14.142</td> <td> 0.000</td> <td>   -0.021</td> <td>   -0.016</td>
</tr>
</table>
<table class="simpletable">
<tr>
  <th>Omnibus:</th>       <td> 6.712</td> <th>  Durbin-Watson:     </th> <td>   1.575</td>
</tr>
<tr>
  <th>Prob(Omnibus):</th> <td> 0.035</td> <th>  Jarque-Bera (JB):  </th> <td>   6.796</td>
</tr>
<tr>
  <th>Skew:</th>          <td> 0.148</td> <th>  Prob(JB):          </th> <td>  0.0334</td>
</tr>
<tr>
  <th>Kurtosis:</th>      <td> 2.929</td> <th>  Cond. No.          </th> <td>5.10e+03</td>
</tr>
</table>

Just a couple lines of code, but I get the same result as previously in Excel.

## R

(Hope it's nothing like other languages named just one letter. Like C.)

Once again, we grab the data.

```
cbb.data <- read.csv('cbb.csv', fileEncoding="UTF-8-BOM")
```

We define our dependant and independent variables, and fetch our summary.

```
multiple.regression <- lm(W_PER ~ ADJOE + EFG_O + TOR + ORB, data=cbb.data)

summary(multiple.regression)

```

And the result:


```
Residuals:
     Min       1Q   Median       3Q      Max 
-0.27208 -0.06637 -0.00104  0.06112  0.33404 

Coefficients:
              Estimate Std. Error t value Pr(>|t|)    
(Intercept)  0.3789069  0.0717371   5.282 1.44e-07 ***
ADJOE        0.0054487  0.0005581   9.763  < 2e-16 ***
ADJDE       -0.0056282  0.0006692  -8.410  < 2e-16 ***
EFG_O        0.0220031  0.0011230  19.593  < 2e-16 ***
EFG_D       -0.0188338  0.0013317 -14.142  < 2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 0.09594 on 1752 degrees of freedom
Multiple R-squared:  0.7115,	Adjusted R-squared:  0.7109 
F-statistic:  1080 on 4 and 1752 DF,  p-value: < 2.2e-16
```

As a beginner to R, I must say, the language feels clean and there seems to be more given out of the box as compared to python. I'll have to dig into this, as I could be wrong.

## Final Thoughts

My first thoughts when cracking open RStudio was that, man, this feels like it came from the past, a different age. And the funky `<-` variable assignment syntax looked really strange at the start.

But, I can see why many data science practitioners prefer the R ecosystem. It's mature, with robust standard libraries, and it gets the job done. I'm excited to dive deeper already.

This tiny exercise also reaffirms my sense that it really is not the tool, but the wielder that matters when it comes to performing data analysis.

I might do some actual analysis on this dataset eventually, but till then! 



