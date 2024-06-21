// Import our custom CSS
import "../scss/styles.scss";

import { createPopper } from "@popperjs/core";
// Import all of Bootstrap's JS
//import * as bootstrap from "bootstrap";
// Or
// Import only the Bootstrap components we need
/*
Alert, Button, Carousel, Collapse, Dropdown, Modal, Popover, Scrollspy, Tab, Toast, Tooltip
*/
import Collapse from "bootstrap/js/dist/collapse";
import Tooltip from "bootstrap/js/dist/tooltip";

// Initialize tooltips
document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new Tooltip(tooltipTriggerEl);
  });
});

// Custom JS files
import "./dev/_filters.js";
