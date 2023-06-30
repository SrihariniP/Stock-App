import numpy as np
import plotly.graph_objs as go
import yfinance as yf
import sys
import pandas as pd
import requests

#print("Hello from Python")

#print("Parameter: " + sys.argv[1]+'#')

choice = sys.argv[1]
#choice = 'INFY'
d = yf.download(tickers=choice, period = '5d', interval = '15m', rounding= True)

data = d.to_json(orient='table', date_format='iso')


#r = requests.post('http://localhost:3000/tickerdata', json = data_json)
print(data)