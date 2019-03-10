# parc
An application/website that gives users the ability to host a private parking spot (e.g. driveway, garage) and for other users to book those parking spots for a time frame (hourly, daily, weekly, monthly, etc).

## Proposal
### Title
P.A.R.C.
* Parking At Residential Communities

### Members
* Brent Bumann, Gabriel Lujan, Sam Ardrey, Vishal Sandhu

### Description
* An application/website that gives users the ability to host a private parking spot (e.g. driveway, garage) and for other users to book those parking spots for a specified time frame (hourly, daily, weekly, monthly, etc).

### Backup Idea
* Paper Smash Bros.
  * Think “Paper Mario” meets “Super Smash Bros.”

## Timeline & Division of Work
### MVP’s
1) User Auth
2) Search
3) Map / Locations
4) Listings
5) Bookings

### Sample State & Schema Layout
* Entities
  * Users
    * :create, :show, :update (potentially)
  * Listings
    * :index, :show, :create, :delete
    * user_id
    * has_one / has_many :location
    * has_many_attached :photos
    * searchable?
  * Bookings
    * availability
    * user_id
    * listing_id
    * daily / hourly
    * calendar
* Session
  * user_id
* Errors
  * User Auth
  * Bookings
* UI
  * Modal
  * Search Selector(s)

### Timeline & Breakdown of MVP's
1) Day One - User Auth
  * Backend (Brent, Sam)
    * MVC Framework
    * Controllers, Actions, Schema, Seeds
  * Frontend (Gabe, Vishal)
    * Bootstrap
    * Session Slice, Reducers, Thunks

2) Day Two - Search
  * AJAX calls (Vishal)
  * Setting up API/utils (Brent)
  * Selectors (Sam)
  * Components & Containers (Gabe)

3) Day Three - Map (Brent, Vishal, Gabe, Sam)
  * Google API
  * Embedding

4) Day Four - Listings & Bookings
  * Forms Components & Containers (Gabe)
  * Splash Page Components (Sam)
  * CSS (Brent & Vishal)
