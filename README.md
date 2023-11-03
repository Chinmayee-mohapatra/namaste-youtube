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
