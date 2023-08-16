const Kbot = require("./Kbot");

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
    });

