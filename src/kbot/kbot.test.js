const Kbot = require("./Kbot");

    describe("Saludador", () => {

      it("debería crear Kbot con idioma predeterminado", () => {
        const kbot = new Kbot();
        expect(kbot.idioma).toEqual("ES");
      });
    });

