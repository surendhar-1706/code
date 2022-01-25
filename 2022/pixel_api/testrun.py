import asyncio
from asyncio.windows_events import NULL
import time
#import requests
from pix_apidata import *
from datetime import datetime, timedelta
# import pretty
 
api = apidata_lib.ApiData()
event_loop = asyncio.get_event_loop()

async def main():
    api.on_connection_started(connection_started)
    api.on_connection_stopped(connection_stopped)
    api.on_trade_update(on_trade)
    api.on_best_update(on_best)
    api.on_refs_update(on_refs)
    api.on_srefs_update(on_srefs)
    key = "TNF8E+00s1nxRCOYbmwHkuep6D8="
    host = "apidata.accelpix.in"
    scheme = "http"
    s = await api.initialize(key, host,scheme)
    print(s)

    # his = await api.get_intra_eod("NIFTY-1","20210603", "20210604", "5")
    # print("History : ",his)

    syms = ['RELIANCE']
    await api.subscribeAll(syms)
    print("Subscribe Done")
    
    # time.sleep(1)
    # await api.unsubscribeAll(['NIFTY-1'])
    # print("Unsubscribe Done")

def on_trade(msg):
    trd = apidata_models.Trade(msg)
    now = datetime.now()
    print (now)
    # print('on_trade:','ticker:',trd.ticker,'price',trd.price,'quantity:',trd.qty)
    # print('done_one_fetch---------------')
    # print(time)
    print(trd.ticker)
    print(trd.time)
   

def on_best(msg):
    bst = apidata_models.Best(msg)
    # print(bst)
    # now = datetime.now()
    # print (now)
    # print('askprice:',bst.askPrice,'bidprice:',bst.bidPrice,'bidqty',bst.bidQty)
    # print("Best : ",msg) # or print(bst.bidPrice) likewise object can be called for ticker, segmentId, kind, bidQty, askPrice, askQty

def on_refs(msg):
    ref = apidata_models.Refs(msg)
    # print(ref.)
    # now = datetime.now()
    # print (now)
    # print(ref.price)
    # print("Refs : ",msg) # or print(ref.price) likewise object can be called for segmentId, kind, ticker

def on_srefs(msg):
    sref = apidata_models.RefsSnapshot(msg)
    
    # now = datetime.now()
    # print (now)
    # print(sref.ticker,':','open:',sref.open,'high:',sref.high,'low:',sref.low,'close:',sref.close)
    
    # print("Refs Snapshot : ",msg) # or print(sref.high) likewise object can be called for kind, ticker, segmentId, open, close, low, avg, oi, lpc,upc


def connection_started():
    print("Connection started callback")

def connection_stopped():
    print("Connection stopped callback")

event_loop.create_task(main())
try:
   event_loop.run_forever()
finally:
   event_loop.close()