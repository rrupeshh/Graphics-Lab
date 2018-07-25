let translation;
let a,b,c,d;


function setup(){
    createCanvas(screen.width,screen.height);
    
    translation = prompt('Enter translation Factor');
   
}

function draw(){
    fill(3,4,5);
    text('Before translation',200,80);
    fill(100,345,222)
    text('After translation',450,80);
    //Before translation
    translate(200,100);
    a = [[10],[10],[1]];
    b = [[50],[10],[1]];
    c = [[50],[50],[1]];
    d = [[10],[50],[1]];
    fill(3,4,5);
    beginShape();
        vertex(a[0],a[1]);
        vertex(b[0],b[1]);
        vertex(c[0],c[1]);
        vertex(d[0],d[1]);
    endShape(CLOSE);
    
    //translation Matrix
    translation_matrix = [
        [1,0,translation],
        [0,1,translation],
        [0,0,1]
    ];
    
    
    aN = matrix_multi(translation_matrix,a);
    bN = matrix_multi(translation_matrix,b);
    cN = matrix_multi(translation_matrix,c);
    dN = matrix_multi(translation_matrix,d);
    
    translate(200,0);
    fill(100,345,222)

    beginShape();
        vertex(aN[0],aN[1]);
        vertex(bN[0],bN[1]);
        vertex(cN[0],cN[1]);
        vertex(dN[0],dN[1])
    endShape(CLOSE);
    
    
}

function matrix_multi(a,b){
    let aRows = a.length;
    let aCols = a[0].length;
    let bRows = b.length;
    let bCols = b[0].length;
    let result = new Array(aRows);
    if (aCols == bRows){
        for (var i=0; i<aRows;++i){
            result[i] = new Array(bCols);
            for (var j =0 ; j<bCols;++j ){
                result[i][j] = 0;
                for (var k = 0; k<aCols;++k){
                    result[i][j] += a[i][k]*b[k][j];
                }
            }
        }
    return result;
    }
}