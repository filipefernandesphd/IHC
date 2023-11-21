AFRAME.registerComponent('mycomponent', {
    'init': function() {
        console.log('This is my component');
    },

    events:{
        click: function(evt){
            this.createBox();
        }
    },

    createBox: function(){
        const color = this.gerarCorAleatoria();

        const newbox = document.createElement('a-box'); 
        newbox.setAttribute('color', color);
        newbox.setAttribute('position', this.gerarNumerosAleatorios());
        newbox.setAttribute('mycomponent','');
        newbox.setAttribute('animation__mouseenter','property: components.material.material.color; type: color; to: blue; startEvents: mouseenter; dur: 200');
        newbox.setAttribute('animation__mouseleave',`property: components.material.material.color; type: color; to: ${color}; startEvents: mouseleave; dur: 200`);
        newbox.classList.add('abox');
        newbox.classList.add('raycastable');
        
        this.el.sceneEl.appendChild(newbox);
    },

    gerarNumerosAleatorios: function() {
        // Gerar valores de x e z entre -2.5 e 2.5
        var x = ((Math.random() * 11) - 5) / 2;
        var z = ((Math.random() * 11) - 5) / 2;
  
        // Gerar valor de y entre 0.5 e 2.5
        var y = ((Math.floor(Math.random() * 23) + 3) / 10);
  
        return `${x.toFixed(1)} ${y.toFixed(1)} ${z.toFixed(1)}`;
    },

    gerarCorAleatoria: function() {
        // Gera um valor hexadecimal aleatório entre 0 e 16777215 (0xFFFFFF em hexadecimal)
        var corDecimal = Math.floor(Math.random() * 16777215);
      
        // Converte o valor decimal para uma string hexadecimal e adiciona zeros à esquerda, se necessário
        var corHexadecimal = corDecimal.toString(16).padStart(6, '0');
      
        // Retorna a cor no formato hexadecimal
        return '#' + corHexadecimal;
      }

});