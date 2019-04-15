Vec3 = function(x ,y, z){
    this.x = x;
    this.y = y;
    this.z = z;
}

// Add method
Vec3.prototype.add = function( v )
{
this.x += v.x;
this.y += v.y;
this.z += v.z;
return this;
}

Vec3.prototype.sub = function( v )
{
this.x -= v.x;
this.y -= v.y;
this.z -= v.z;
return this;
}

// Sum method
Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.calc_area = function( v )
{
    var e1 = this.y*v.z - this.z*v.y;
    var e2 = this.z*v.x - this.x*v.z;
    var e3 = this.x*v.y - this.y*v.x;
    return Math.sqrt(e1*e1 + e2*e2 + e3*e3) / 2;
}