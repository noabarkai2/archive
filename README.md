Herum Client

# app

- app.routing

* app.module

  - header
  - pages

    - login
    - home-page

  - services

    - auth <!-- will hold the data of the logged user with personal data + roles and more -->
    - httpRequests
    - graphQL <!-- will managed by the httpRequestService -->

  ## Shared

  - shared.module

    - components

      - atoms

        - herum-input-field
        - herum-select
        - herum-multiselect
        - herum-button
        - herum-checkbox
        - herum-chip
        - herum-switch
        - herum-toggle-button
        - herum-progress-bar
        - herum-circular-progress-bar

      - organisms

        - page-header <!-- TODO: ask avi if it will return in different places -->
        - herum-video-player
        - herum-pdf
        - herum-story

      - dialogs
        - insurance-dialog

  ## Feed

  - feed.module

    - components

      - feed-layout <!-- will call the molecules of the resources from the shared module + menus -->

        - collections-menu-layout
        - collection-menu-layout
        - comments-layout

      - molecules

        - collection-status-item
        - user-progress
        - resource-description
        - resource-item
        - comment-item

      - organisms

        - collection-priority-expendable-panel

      - services

        - feed-collection-manager
          <!-- the service will make the requests to the backend and will hold the data from the server  -->
          <!-- will hold a behaviorSubject of the collections over view and current collection resources data -->

