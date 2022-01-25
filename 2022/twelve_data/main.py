from twelvedata import TDClient
from datetime import datetime
def on_event(e):
    # do whatever is needed with data
    now = datetime.now()
    print(e['symbol'],'-',e['price'])
    print(now)

td = TDClient(apikey="cd929d57a91e4b2887cef5cdd1e03e03")
ws = td.websocket(symbols="RELIANCE:NSE", on_event=on_event)
ws.subscribe(['RELIANCE:NSE'])
ws.connect()
ws.keep_alive()