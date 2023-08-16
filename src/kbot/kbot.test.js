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
    });

