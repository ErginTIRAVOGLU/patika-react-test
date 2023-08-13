import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./index";
import userEvent from "@testing-library/user-event";


describe("Todo testleri", () =>{
 

    beforeEach(()=>{
        
        
    });

    test("Varsayılan olarak verilen 3 nesne render edilmeli", () =>{
        render(<Todo />);
        //const button = screen.getByText("Ekle");
        //const input = screen.getByLabelText("Text");
        const items =screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    });

    test("Input ve button dökümanda bulunmalı", () =>{
        render(<Todo />);
        const button = screen.getByText("Ekle");
        const input = screen.getByLabelText("Text");
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument(); 
    });

    test("Inputa string girilip butona basınca listeye eklenmeli", () => {
        render(<Todo />);
        const button = screen.getByText("Ekle");
        const input = screen.getByLabelText("Text");
        const name="Mehmet";
        userEvent.type(input,name);

        fireEvent.click(button);
        expect(screen.getByText(name)).toBeInTheDocument();
    })
});