# NAMASTE YOUTUBE PROJECT

### APP STRUCTURE

- Header
- Body
  - SideBar
    - MenuItems
  - MainContainer
    - Buttons List
    - VideoContainer
      - VideoCard

### Debouncing

- Typing fast -> difference b/w 2 key strokes is less (let 30 ms)
- Typing slow -> difference b/w 2 key strokes is more (let 200 ms)

### Performance

- iphone pro max = 14 letter \* 1000 people making API calls = 14000 API calls
- with debouncing = 3 API calls \* 1000 = 3000 API CALLS

- Debouncing is applied with 200ms

  - if difference between 2 key strokes is < 200ms -> decline the API CALL.

- For debouncing used in Google/ youtube the time is

  /\*

  -
  - KEY - i
  - - render the component
  - - useEffect();
  - - start timer => make api call after 200 ms
  -
  - KEY - ip
  - - destroy the component(useEffect return method called)
  - - re-render the component
  - - useEffect()
  - - start timer => make api call after 200 ms
      \*/

### Caching

Time complexity to search for an array = O(n)

[i, ip, iph, ipho, iphon, iphone]

Time complexity of search for an object/map = O(1)

{
i:
ip:
iph:
ipho:
iphon:
iphone:
}

new Map() -> even more optimized than searching inside Object.
For simplicity we will use object here.

### Live chatting

Live Chatting >>>>>>> Infinite scrolling >>>>>>>> Pagination

- challenges of live chat:
  -> Get data live -- Data Layer
  -> Update the chat window (UI)

Update UI in an efficient way so that the page doesnot freeze even after loading the live stream data for a longer period of time.

- Two ways to handle LIVE data
  -> Using Web Sockets - 2 way connection that creates a handshake. Once done we can send data from either side, i.e. bi-directional. No regular inerval.

  -> API polling - UI request the server for data and the server sends the data. Uni-directional data. In regular interval the data is polled

---

- In an application like GMail, API polling can be used as e dont need very real time data . Its okay if the reciver gets the mail after 10 seconds. Eg: Crickbuzz - API polling happens in "25 seconds".

- If there is application like stock market apps, Here we need very real time data. Eg: Live chat applications need real time data.
