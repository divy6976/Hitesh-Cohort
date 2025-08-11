// Globe Background Animation
class GlobeBackground {
    constructor() {
        this.canvas = document.getElementById('globeCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.points = [];
        this.connections = [];
        this.rotation = 0;
        
        this.init();
        this.animate();
    }
    
    init() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        // Create globe points
        this.createGlobePoints();
        this.createConnections();
        
        // Handle resize
        window.addEventListener('resize', () => this.handleResize());
    }
    
    createGlobePoints() {
        const radius = Math.min(this.width, this.height) * 0.3;
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        
        // Create points in a sphere pattern
        for (let i = 0; i < 50; i++) {
            const phi = Math.acos(-1 + (2 * i) / 50);
            const theta = Math.sqrt(50 * Math.PI) * phi;
            
            const x = centerX + radius * Math.cos(theta) * Math.sin(phi);
            const y = centerY + radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);
            
            this.points.push({
                x: x,
                y: y,
                z: z,
                originalX: x - centerX,
                originalY: y - centerY,
                originalZ: z
            });
        }
    }
    
    createConnections() {
        // Create connections between nearby points
        for (let i = 0; i < this.points.length; i++) {
            for (let j = i + 1; j < this.points.length; j++) {
                const distance = Math.sqrt(
                    Math.pow(this.points[i].x - this.points[j].x, 2) +
                    Math.pow(this.points[i].y - this.points[j].y, 2)
                );
                
                if (distance < 100) {
                    this.connections.push({
                        from: i,
                        to: j,
                        opacity: 1 - (distance / 100)
                    });
                }
            }
        }
    }
    
    rotatePoints() {
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        
        this.points.forEach(point => {
            // Rotate around Y axis
            const cosY = Math.cos(this.rotation * 0.001);
            const sinY = Math.sin(this.rotation * 0.001);
            
            const x = point.originalX * cosY - point.originalZ * sinY;
            const z = point.originalX * sinY + point.originalZ * cosY;
            
            point.x = centerX + x;
            point.z = z;
        });
        
        this.rotation += 0.5;
    }
    
    draw() {
        // Clear canvas
        this.ctx.fillStyle = '#171717';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // Draw connections
        this.ctx.strokeStyle = '#4CAF50';
        this.ctx.lineWidth = 1;
        
        this.connections.forEach(connection => {
            const from = this.points[connection.from];
            const to = this.points[connection.to];
            
            if (from && to) {
                this.ctx.globalAlpha = connection.opacity * 0.3;
                this.ctx.beginPath();
                this.ctx.moveTo(from.x, from.y);
                this.ctx.lineTo(to.x, to.y);
                this.ctx.stroke();
            }
        });
        
        this.ctx.globalAlpha = 1;
        
        // Draw points
        this.points.forEach(point => {
            const size = Math.max(1, 3 - (point.z / 200));
            this.ctx.fillStyle = '#4CAF50';
            this.ctx.beginPath();
            this.ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        // Draw globe outline
        this.ctx.strokeStyle = '#4CAF50';
        this.ctx.lineWidth = 2;
        this.ctx.globalAlpha = 0.3;
        this.ctx.beginPath();
        this.ctx.arc(this.width / 2, this.height / 2, Math.min(this.width, this.height) * 0.3, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.globalAlpha = 1;
    }
    
    animate() {
        this.rotatePoints();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
    
    handleResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        // Recreate points for new dimensions
        this.points = [];
        this.connections = [];
        this.createGlobePoints();
        this.createConnections();
    }
}

// Initialize globe when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GlobeBackground();
}); 