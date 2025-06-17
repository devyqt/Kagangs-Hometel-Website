const rooms = [
  {
    id: 1,
    title: "Standard Room (One Double Bed)",
    price: 1500,
    description: "Perfect for solo travelers or couples.",
    image: "Room Pictures/Standard Room (Solo-Couple)/SC6.jpg",
    images: [
      "Room Pictures/Standard Room (Solo-Couple)/SC1.jpg",
      "Room Pictures/Standard Room (Solo-Couple)/SC2.jpg",
      "Room Pictures/Standard Room (Solo-Couple)/SC3.jpg",
      "Room Pictures/Standard Room (Solo-Couple)/SC4.jpg",
      "Room Pictures/Standard Room (Solo-Couple)/SC5.jpg",
      "Room Pictures/Standard Room (Solo-Couple)/SC6.jpg",
      "Room Pictures/Standard Room (Solo-Couple)/SC7.jpg",
    ],
    features: [
      { icon: "/mini-icons/double-bed.png", text: "Double bed" },
      { icon: "/mini-icons/shower.png", text: "Private shower" },
      { icon: "/mini-icons/air-conditioner.png", text: "Air-conditioner" },
      { icon: "/mini-icons/breakfast.png", text: "Complimentary breakfast" },
      {
        icon: "/mini-icons/television.png",
        text: "Smart TV with YouTube Premium",
      },
    ],
  },
  {
    id: 2,
    title: "Standard Room (With Extra Bed)",
    price: 2000,
    description: "Perfect for a group of friends of up to 3–4 guests.",
    image: "Room Pictures/Standard Room (With Extra Bed)/SR4.jpg",
    images: [
      "Room Pictures/Standard Room (With Extra Bed)/SR1.jpg",
      "Room Pictures/Standard Room (With Extra Bed)/SR2.jpg",
      "Room Pictures/Standard Room (With Extra Bed)/SR3.jpg",
      "Room Pictures/Standard Room (With Extra Bed)/SR4.jpg",
      "Room Pictures/Standard Room (With Extra Bed)/SR5.jpg",
    ],
    features: [
      {
        icon: "/mini-icons/double-bed.png",
        text: "One double bed and one extra bed",
      },
      { icon: "/mini-icons/shower.png", text: "Private shower" },
      { icon: "/mini-icons/air-conditioner.png", text: "Air-conditioner" },
      {
        icon: "/mini-icons/television.png",
        text: "Smart TV with YouTube Premium",
      },
      { icon: "/mini-icons/breakfast.png", text: "Complimentary breakfast" },
    ],
  },
  {
    id: 3,
    title: "Family Room",
    price: 2000,
    description: "Ideal for families of up to 3 guests.",
    image: "Room Pictures/Family Room/FR1.jpg",
    images: [
      "Room Pictures/Family Room/FR1.jpg",
      "Room Pictures/Family Room/FR2.jpg",
      "Room Pictures/Family Room/FR3.jpg",
      "Room Pictures/Family Room/FR4.jpg",
      "Room Pictures/Family Room/FR5.jpg",
      "Room Pictures/Family Room/FR6.jpg",
      "Room Pictures/Family Room/FR7.jpg",
    ],
    features: [
      {
        icon: "/mini-icons/double-bed.png",
        text: "One double bed and one single bed",
      },
      { icon: "/mini-icons/shower.png", text: "Private shower" },
      { icon: "/mini-icons/air-conditioner.png", text: "Air-conditioner" },
      {
        icon: "/mini-icons/television.png",
        text: "Smart TV with YouTube Premium",
      },
      { icon: "/mini-icons/breakfast.png", text: "Complimentary breakfast" },
    ],
  },
  {
    id: 4,
    title: "Deluxe Room",
    price: 2500,
    description: "Spacious comfort for 5 guests.",
    image: "Room Pictures/Deluxe Room/DR1.jpg",
    images: [
      "Room Pictures/Deluxe Room/DR1.jpg",
      "Room Pictures/Deluxe Room/DR2.jpg",
      "Room Pictures/Deluxe Room/DR3.jpg",
      "Room Pictures/Deluxe Room/DR4.jpg",
      "Room Pictures/Deluxe Room/DR5.jpg",
      "Room Pictures/Deluxe Room/DR6.jpg",
      "Room Pictures/Deluxe Room/DR7.jpg",
      "Room Pictures/Deluxe Room/DR8.jpg",
      "Room Pictures/Deluxe Room/DR9.jpg",
      "Room Pictures/Deluxe Room/DR10.jpg",
      "Room Pictures/Deluxe Room/DR11jpg",
      "Room Pictures/Deluxe Room/DR12jpg",
      "Room Pictures/Deluxe Room/DR13jpg",
    ],
    features: [
      {
        icon: "/mini-icons/double-bed.png",
        text: "One double bed and two extra beds",
      },
      { icon: "/mini-icons/shower.png", text: "Private shower" },
      { icon: "/mini-icons/air-conditioner.png", text: "Air-conditioner" },
      {
        icon: "/mini-icons/television.png",
        text: "Smart TV with YouTube Premium",
      },
      { icon: "/mini-icons/balcony.png", text: "Private balcony" },
      { icon: "/mini-icons/breakfast.png", text: "Complimentary breakfast" },
    ],
  },
];
$(document).ready(function () {
  const $container = $("#rooms-container");
  const $modalsContainer = $(".modals-container");

  rooms.forEach((room, index) => {
    const modalId = `room-modal-${room.id}`;

    const featureList = room.features
      .map(
        (feature) => `
        <li>
          <img src="${feature.icon}" alt="${feature.text}" />
          ${feature.text}
        </li>`
      )
      .join("");

    // Room card
    const cardHtml = `
      <div class="col-12 col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="${
        index % 2 !== 0 ? "100" : "0"
      }">
        <div class="card shadow-sm h-100 room">
          <a href="#" data-bs-toggle="modal" data-bs-target="#${modalId}">
            <img src="${room.image}" class="card-img-top room-img" alt="${
      room.title
    }" />
          </a>
          <div class="card-body d-flex flex-column">
            <div class="room-desc">
              <div class="room-details">
                <h6 class="room-name">${room.title}</h6>
                <p class="room-price"><strong>₱${room.price.toLocaleString()}</strong>/night</p>
              </div>
              <p class="room-text">${room.description}</p>
            </div>
            <ul class="room-features">
              ${featureList}
            </ul>
          </div>
        </div>
      </div>
    `;
    $container.append(cardHtml);

    // Modal HTML for this room
    const modalHtml = `
      <div id="${modalId}" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${room.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="modal-row d-flex flex-wrap">
                <div class="col-lg-4 col-12">
                  <div class="room-desc">
                    <p class="room-price">₱<strong>${room.price.toLocaleString()}</strong>/night</p>
                    <p class="room-text">${room.description}</p>
                  </div>
                  <ul class="room-features">
                    ${featureList}
                  </ul>
                </div>
                <div class="col-lg-8 col-12 image-col">
                  <div id="carousel-${room.id}" class="owl-carousel owl-theme">
                    ${room.images
                      .map(
                        (imgSrc) => `
                      <div class="item">
                        <img src="${imgSrc}" alt="${room.title}" class="img-fluid" />
                      </div>`
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    $modalsContainer.append(modalHtml);
  });

  // After appending all modals, initialize OwlCarousel for each
  rooms.forEach((room) => {
    $(`#carousel-${room.id}`).owlCarousel({
      loop: true,
      margin: 10,
      //   nav: true,
      items: 1,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 2 },
      },
    });
  });
});
