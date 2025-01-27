class MaxHeap {
    public heap: Orden[];
    private n: number;

    constructor(size: number) {
        this.heap = new Array(size + 1);
        this.n = 0;
    }

    public checkMax(): Orden {
        return this.heap[1];
    }

    public isEmpty(): boolean {
        return this.n == 0;
    }

    public getQuantity(): number {
        return this.n;
    }

    public ret_heap(){
        return this.heap;
    }

    public act_heap(heap){
        this.heap = heap;
    }

    public insert(value: Orden): void {
        if (this.n == (this.heap.length - 1))
            this.resize(2 * this.heap.length)
        this.n++;
        this.heap[this.n] = value;
        this.swap(this.n);
    }

    private swap(i: number): void {
        let father: number = Math.floor(i / 2);
        while (i > 1 && this.heap[father].precio < this.heap[i].precio) {
            let temp: Orden = this.heap[father];
            this.heap[father] = this.heap[i];
            this.heap[i] = temp;
            i = father;
            father = Math.floor(i / 2);
        }
    }

    private resize(newSize: number): void {
        let newHeap: Orden[] = new Array(newSize);
        for (let i = 1; i < this.heap.length; i++)
            newHeap[i] = this.heap[i];
        this.heap = newHeap;
    }

    public getMax(): Orden {
        let max: Orden = this.heap[1];
        this.heap[1] = this.heap[this.n];
        this.heap[this.n].cantidad = 0;
        this.n--;
        this.sink(1);
        return max;
    }

    private sink(i: number): void {
        while (2*i <= this.n) {
            let j: number = 2*i;
            if (j < this.n && this.heap[j] < this.heap[j+1])
                j++;
            if (this.heap[i] >= this.heap[j])
                break;
            let temp: Orden = this.heap[i];
            this.heap[i] = this.heap[j];
            this.heap[j] = temp;
            i = j;
        }
    }
}