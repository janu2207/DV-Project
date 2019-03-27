import csv  
import json  
  
# Open the CSV  
f = open( '/Users/ash/Documents/Study/Spring_2019/Data_Visualization/Assignment2/10yearAUSOpenMatches.csv', 'rU' )  
# Change each fieldname to the appropriate field name. I know, so difficult.  
reader = csv.DictReader( f, fieldnames = ("round", "winner", "result", "year", "gender", "player1", "player2", "country1", "country2", 
											"firstServe1", "firstServe2", "ace1", "ace2", "double1", "double2", 
											"firstPointWon1", "firstPointWon2", "secPointWon1",	"secPointWon2", "fastServe1",
											"fastServe2", "avgFirstServe1", "avgFirstServe2", "avgSecServe1", "avgSecServe2",
											"break1", "break2", "return1", "return2", "total1", "total2", "winner1", "winner2", 
											"error1", "error2", "net1",	"net2"))
# Parse the CSV into JSON  
string = json.dumps( [ row for row in reader ] )  
tennisData = json.loads(string)
year_group = {"name": "Australian Open the overall perspective"}
year_group["children"] = []
players = {}
round_arr = {}
year = {}

tennisData = tennisData[1:len(tennisData)]
for each in tennisData:
	if each["year"] not in year:
		year[each["year"]] = {}
		year[each["year"]]["name"] = each["year"]
		year[each["year"]]["children"] = []
	
	round_key = each["year"] + ''+ each["round"]
	
	if round_key not in round_arr:
		round_arr[round_key] = {}
		round_arr[round_key]["name"] = each["round"]
		round_arr[round_key]["children"] = []
		players[round_key] = []

	obj = {}
	obj["name"] = each["player1"] +' vs '+ each["player2"]
	if each["round"] == "First":
		obj["size"] = 1000
	elif each["round"] == "Second":
		obj["size"] = 2000
	elif each["round"] == "Third":
		obj["size"] = 3000
	elif each["round"] == "Fourth":
		obj["size"] = 4000
	elif each["round"] == "quarter":
		obj["size"] = 5000
	elif each["round"] == "semi":
		obj["size"] = 6000
	elif each["round"] == "Final":
		obj["size"] = 7000
	players[round_key].append(obj)

years = ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013']
rounds = ['quarter', 'semi', 'Final']
for y in years:
	for r in rounds:
		round_key = y + ''+ r
		# print(players[round_key])
		round_arr[round_key]["children"] = players[round_key]
		year[y]["children"].append(round_arr[round_key])
	year_group["children"].append(year[y])

playerAnalysis = {}
for each in tennisData:
	if each['round'] not in rounds:
		continue

	winner = "1"
	loser = "2"
	if each["winner"] == each["player2"]:
		winner = "2"
		loser = "1"

	winnerFirstServe = "firstServe"+winner
	loserFirstServe = "firstServe"+loser

	winnerFirstPoint = "firstPointWon"+winner
	loserFirstPoint = "firstPointWon"+loser

	winnerFastServe = "fastServe"+winner
	loserFastServe = "fastServe"+loser

	winnerBreak = "break"+winner
	loserBreak= "break"+loser

	winnerError = "error"+winner
	loserError = "error"+loser

	round_key = each['year'] + ''+ each['round']
	if round_key not in playerAnalysis: #2008quarter
		playerAnalysis[round_key] = {}
		playerAnalysis[round_key]["winner"] = [0, 0, 0, 0, 0]
		playerAnalysis[round_key]["loser"] = [0, 0, 0, 0, 0]
		playerAnalysis[round_key]["data"] = {}

	winner = playerAnalysis[round_key]["winner"]
	loser = playerAnalysis[round_key]["loser"]

	if(each[winnerFirstServe].replace('%', '').isdigit()):
		winner[0] = winner[0] + float(each[winnerFirstServe].replace('%', ''))

	if(each[winnerFirstPoint].replace('%', '').isdigit()):
		winner[1] = winner[1] + float(each[winnerFirstPoint].replace('%', ''))

	if(each[winnerFastServe].isdigit()):
		winner[2] = winner[2] + float(each[winnerFastServe])

	if(each[winnerBreak].replace('%', '').isdigit()):
		winner[3] = winner[3] + float(each[winnerBreak].replace('%', ''))

	if(each[winnerError].isdigit()):
		winner[4] = winner[4] + float(each[winnerError])


	if(each[loserFirstServe].replace('%', '').isdigit()):
		loser[0] = loser[0] + float(each[loserFirstServe].replace('%', ''))

	if(each[loserFirstPoint].replace('%', '').isdigit()):
		loser[1] = loser[1] + float(each[loserFirstPoint].replace('%', ''))

	if(each[loserFastServe].isdigit()):
		loser[2] = loser[2] + float(each[loserFastServe])

	if(each[loserBreak].replace('%', '').isdigit()):
		loser[3] = loser[3] + float(each[loserBreak].replace('%', ''))

	if(each[loserError].isdigit()):
		loser[4] = loser[4] + float(each[loserError])

	playerAnalysis[round_key]["winner"] = winner
	playerAnalysis[round_key]["loser"] = loser
	playerKey = each["player1"] +' vs '+ each["player2"]
	playerAnalysis[round_key]["data"][playerKey] = {}
	playerAnalysis[round_key]["data"][playerKey]['player1'] = each['player1']
	playerAnalysis[round_key]["data"][playerKey]['player2'] = each['player2']
	playerAnalysis[round_key]["data"][playerKey]['winner'] = each['winner']
	playerAnalysis[round_key]["data"][playerKey]['result'] = each['result']


print(playerAnalysis)
# with open('year_group.json', 'w') as outfile:
#     json.dump(year_group, outfile)





