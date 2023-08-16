const Kbot = require("./kbot")

    describe("Saludador", () => {

      it("debería crear Kbot con idioma predeterminado", () => {
        const kbot = new Kbot();
        expect(kbot.idioma).toEqual("ES");
      });

      it("debería crear un Kbot con el idioma especificado", () => {
        const kbot = new Kbot("EN");
        expect(kbot.idioma).toEqual("EN");
      });

      it("debería saludar en la mañana en español", () => {
        const kbot = new Kbot("ES");
        const mensaje = kbot.saludar("Juan", 9);
        expect(mensaje).toEqual("Buenos días Juan");
      });

      it("debería saludar en la mañana en inglés", () => {
        const kbot = new Kbot("EN");
        const mensaje = kbot.saludar("Juan", 10);
        expect(mensaje).toEqual("Good morning Juan");
      });
      
      it("debería saludar en la tarde en español", () => {
        const kbot = new Kbot("ES");
        const mensaje = kbot.saludar("Nat", 16);
        expect(mensaje).toEqual("Buenas tardes Nat");
      });
      
      it("debería saludar en la tarde en inglés", () => {
        const kbot = new Kbot("EN");
        const mensaje = kbot.saludar("Nat", 14);
        expect(mensaje).toEqual("Good afternoon Nat");
      });

      it("debería saludar en la noche en español", () => {
        const kbot = new Kbot("ES");
        const mensaje = kbot.saludar("Luisa", 21);
        expect(mensaje).toEqual("Buenas noches Luisa");
      });

      it("debería saludar en la noche en inglés", () => {
        const kbot = new Kbot("EN");
        const mensaje = kbot.saludar("Luis", 23);
        expect(mensaje).toEqual("Good evening Luis");
      }); 
      
    });

