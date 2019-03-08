import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[acpDropdown]'
})

export class DropdownDirective{
    //toggled: boolean = false;
    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('click') mouseClick(eventdata: Event)
    {
        this.isOpen = !this.isOpen;
    }

    // @HostListener('click', ['$event.target']) onClick(btn) {
    //     console.log("button was clicked");
    //   }
}