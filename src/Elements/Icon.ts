type ICON = "AIRPLANE" |
    "BOOKMARK" |
    "BUS" |
    "CAR" |
    "CLOCK" |
    "CONFIRMATION_NUMBER_ICON" |
    "DESCRIPTION" |
    "DOLLAR" |
    "EMAIL" |
    "EVENT_SEAT" |
    "FLIGHT_ARRIVAL" |
    "FLIGHT_DEPARTURE" |
    "HOTEL" |
    "HOTEL_ROOM_TYPE" |
    "INVITE" |
    "MAP_PIN" |
    "MEMBERSHIP" |
    "MULTIPLE_PEOPLE" |
    "PERSON" |
    "PHONE" |
    "RESTAURANT_ICON" |
    "SHOPPING_CART" |
    "STAR" |
    "STORE" |
    "TICKET" |
    "TRAIN" |
    "VIDEO_CAMERA" |
    "VIDEO_PLAY";

export class Icon {
    private readonly icon: string;

    constructor(icon: ICON) {
        this.icon = icon;
    }

    getIcon(): string {
        return this.icon;
    }
}