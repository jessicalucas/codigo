<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');


class Modelo extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }
    //-------------------------------------- IONIC ----------------------
	function validate_login($email)
	{

        // $this->db->select('res.id as id, 
        // res.name as name, 
        // res.email as email, 
        // res.photo as photo,
        // ud.type,
        // ud.cellphone as cellphone,
        // ud.type as type,
        // ud.who_recommended as who_recommended
        // ');
        
        // //Seta from
        // $this->db->from('ls_user as res');
        // //Seta o Join com a tabela de fotos
        // $this->db->join('ls_contact as con', 'res.id = con.contact_first_id');



		$this->db->where('email', $email);
		$query = $this->db->get('ls_user');
			if($query->num_rows() > 0){
				 $data = $query->result();
        return $data;
			}else{
				return false;
			}
	}

}
?>