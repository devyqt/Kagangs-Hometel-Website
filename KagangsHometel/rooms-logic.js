const rooms = [
  {
    id: 1,
    title: "Standard Room",
    price: 1500,
    description: "Perfect for solo travelers or couples.",
    image: "Room Pictures/Standard Room (Solo-Couple)/SC6.jpeg",
    images: [
      "Room Pictures/Standard Room (Solo-Couple)/SC1.jpeg",
      "Room Pictures/Standard Room (Solo-Couple)/SC2.jpeg",
      "Room Pictures/Standard Room (Solo-Couple)/SC3.jpeg",
      "Room Pictures/Standard Room (Solo-Couple)/SC4.jpeg",
      "Room Pictures/Standard Room (Solo-Couple)/SC5.jpeg",
      "Room Pictures/Standard Room (Solo-Couple)/SC6.jpeg",
      "Room Pictures/Standard Room (Solo-Couple)/SC7.jpeg",
    ],
    features: [
      { icon: "mini-icons/double-bed.png", text: "Double bed" },
      { icon: "mini-icons/shower.png", text: "Private shower" },
      { icon: "mini-icons/air-conditioner.png", text: "Air-conditioner" },
      { icon: "mini-icons/breakfast.png", text: "Complimentary breakfast" },
      {icon: "mini-icons/television.png", text: "Smart TV" },
      {icon: "mini-icons/toiletries.png", text: "Toiletries" },
    ],
  },
  {
    id: 2,
    title: "Family Room",
    price: 2000,
    description: "Ideal for families of up to 3 guests.",
    image: "Room Pictures/Family Room/FR1.jpeg",
    images: [
      "Room Pictures/Family Room/FR1.jpeg",
      "Room Pictures/Family Room/FR2.jpeg",
      "Room Pictures/Family Room/FR3.jpeg",
      "Room Pictures/Family Room/FR4.jpeg",
      "Room Pictures/Family Room/FR5.jpeg",
      "Room Pictures/Family Room/FR6.jpeg",
      "Room Pictures/Family Room/FR7.jpeg",
    ],
    features: [
      {
        icon: "mini-icons/double-bed.png",
        text: "Double bed",
      },
      { icon: "mini-icons/shower.png", text: "Private shower" },
      { icon: "mini-icons/air-conditioner.png", text: "Air-conditioner" },
      {
        icon: "mini-icons/television.png",
        text: "Smart TV",
      },
      { icon: "mini-icons/breakfast.png", text: "Complimentary breakfast" },
      {icon: "mini-icons/toiletries.png", text: "Toiletries" },
    ],
  },
  {
    id: 3,
    title: "Quad Room",
    price: 2500,
    description: "Perfect for families or friends of up to 4 guests.",
    image: "Room Pictures/Quad Room/QR1.jpeg",
    images: [
      "Room Pictures/Quad Room/QR1.jpeg",
      "Room Pictures/Quad Room/QR2.jpeg",
      "Room Pictures/Quad Room/QR3.jpeg",
      "Room Pictures/Quad Room/QR4.jpeg",
      "Room Pictures/Quad Room/QR5.jpeg",
      "Room Pictures/Quad Room/QR6.jpeg",
      "Room Pictures/Quad Room/QR7.jpeg",
      "Room Pictures/Quad Room/QR8.jpeg"
    ],
    features: [
      {
        icon: "mini-icons/double-bed.png",
        text: "Double bed",
      },
      { icon: "mini-icons/shower.png", text: "Private shower" },
      { icon: "mini-icons/air-conditioner.png", text: "Air-conditioner" },
      {
        icon: "mini-icons/television.png",
        text: "Smart TV",
      },
      { icon: "mini-icons/balcony.png", text: "Private balcony" },
      { icon: "mini-icons/breakfast.png", text: "Complimentary breakfast" },
      {icon: "mini-icons/toiletries.png", text: "Toiletries" },
    ],
  },
    {
    id: 4,
    title: "Deluxe Room",
    price: 3000,
    description: "Spacious comfort for 5 to 6 guests.",
    image: "Room Pictures/Deluxe Room/DR1.jpeg",
    images: [
      "Room Pictures/Deluxe Room/DR1.jpeg",
      "Room Pictures/Deluxe Room/DR2.jpeg",
      "Room Pictures/Deluxe Room/DR3.jpeg",
      "Room Pictures/Deluxe Room/DR4.jpeg",
      "Room Pictures/Deluxe Room/DR5.jpeg",
      "Room Pictures/Deluxe Room/DR6.jpeg",
      "Room Pictures/Deluxe Room/DR7.jpeg",
    ],
    features: [
      {
        icon: "mini-icons/double-bed.png",
        text: "Double bed",
      },
      { icon: "mini-icons/shower.png", text: "Private shower" },
      { icon: "mini-icons/air-conditioner.png", text: "Air-conditioner" },
      {
        icon: "mini-icons/television.png",
        text: "Smart TV",
      },
      { icon: "mini-icons/balcony.png", text: "Private balcony" },
      { icon: "mini-icons/breakfast.png", text: "Complimentary breakfast" },
      {icon: "mini-icons/toiletries.png", text: "Toiletries" },
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
