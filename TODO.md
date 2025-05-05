## TODO

[x] Design and build events section with JSON data provided from the API
[x] Get correct charcuterie plate image for contact section / fix it
[x] Create mobile versions for header, navbar, & footer
[x] Check and improve responsivess of sections
[x] Accessibility and cross-browser testing

## Late Changes

[x] Add error handling for fetching data from API in Events
[x] Rename var 'currentTime' to 'timeSlotIterator' for better clarity in Reservations
[x] Fix useEffect in Reservations (no time dependency, add date dependency for specific time slots)  
[x] Update LocationSelector to use locations from LocationProvider (DRY, no hard-coded locations)
[x] Fix header width expanding while dropdown menus are open

## Further Issues & Considerations

[] Reservations can be abstracted into smaller components and helper functions (handleSubmit is messy, date & time comparisons can be improved)
[] Can add loading states or skeletons for components that load/fetch data
[] Abstract out Form component?
